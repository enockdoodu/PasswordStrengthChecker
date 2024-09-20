from flask import Flask, request, jsonify
from flask_cors import CORS
from calc_score import check_password
from calc_time_to_crack import calculate_time_to_crack

app = Flask(__name__)
CORS(app)


@app.route('/check_password', methods=['POST'])
def password_strength():
    data = request.get_json()
    password = data.get('password', '')
    score, feedback = check_password(password)
    char_length = len(password)
    entropy, crack_time = calculate_time_to_crack(password)
    strength = ' Very Weak' if entropy < 35 else 'Weak' if entropy < 60 else 'Fair' if entropy < 80 else 'Strong' if entropy < 100 else 'Very Strong'
    return jsonify({'score': crack_time, 'strength': strength, 'feedback': feedback, 'char_length': char_length, 'entropy': entropy})

if __name__ == '__main__':
    app.run(debug=True)
