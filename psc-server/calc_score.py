import string
import re

ascending_sequence = [str(i) + str(i+1) + str(i+2) for i in range(8)] + [chr(i) + chr(i+1) + chr(i+2) for i in range(97, 120)] 
descending_sequence = [str(i) + str(i-1) + str(i-2) for i in range(9, 1, -1)] + [chr(i) + chr(i-1) + chr(i-2) for i in range(122, 98, -1)]
sequences = ascending_sequence + descending_sequence

with open('rockyou.txt', 'r', encoding='latin-1') as wd_file:
    wordlist = wd_file.read().splitlines()

with open('common_names.txt', 'r', encoding='latin-1') as cn_file:
    personal_info = cn_file.read().splitlines()

with open('domain_names.txt', 'r', encoding='latin-1') as dn_file:
    domain_names = dn_file.read().splitlines()

def check_password(password):
    score = 0
    penalty = 0
    feedback = []
    uppercase_count = lowercase_count = digit_count = special_count = 0
    


    # Check if the password has a minimum of 12 characters
    if len(password) < 12:
        penalty += 10
        feedback.append("Password is too short, it should be at least 12 characters long.") 
    
    # Minimum of 12 characters
    if len(password) < 15:
        score += 5

    if len(password) < 24:
        score += 5 
    
    for char in password:
        # Count uppercase letters
        if char in string.ascii_uppercase:
            uppercase_count += 1
        # Count lowercase letters
        elif char in string.ascii_lowercase:
            lowercase_count += 1
        # Count digits
        elif char in string.digits:
            digit_count += 1
        # Count special characters
        elif char in string.punctuation:
            special_count += 1

    if uppercase_count > 0:
        score += 10
    else:
        feedback.append("Password contains no uppercase letter(s).")
        penalty += 5  # Penalty for missing uppercase letter

    if lowercase_count > 0:
        score += 10
    else:
        feedback.append("Password contains no lowercase letter(s).")
        penalty += 5  # Penalty for missing lowercase letter

    if digit_count > 0:
        score += 10
    else:
        feedback.append("Password contains no digit(s).")
        penalty += 5  # Penalty for missing digit

    if special_count > 0:
        score += 10
    else:
        feedback.append("Password contains no special character(s).")
        penalty += 5  # Penalty for missing symbol

    # Should not be found in wordlist
    if password in wordlist:
        feedback.append("Password is too common and found in the wordlist.")
        penalty += 1000  # Penalty for being in wordlist

    # Segmented words shouldn't be found in wordlist
    words = re.sub(r'(?<!^)(?=[A-Z])', r' ', password)
    words = re.findall(r'\b\w+\b', words)
    word_in_wordlist = False
    seg_word_count = 0
    for word in words:
        if word in wordlist:      
            word_in_wordlist = True
            print(f'seg word is {word}')
            seg_word_count += 1
            penalty += (5 * seg_word_count) # Penalty for containing a word from the wordlist
    
    
    if word_in_wordlist:
        feedback.append("Password contains a segmented word found in the wordlist.")
    
    
    if not word_in_wordlist:
        score += 10
    
    # Should not contain personal information
    contains_personal_info = False
    for info in personal_info:
        if info in password:
            contains_personal_info = True
            feedback.append("Password contains personal information.")
            print(f'this is personal {info}')
            penalty += 10  # Penalty for containing personal information
            break
    if not contains_personal_info: 
        score += 10
    # date format
    date_patterns = [
        r'\b(1[0-9]{3}|2[0-9]{3})\b',  # Matches 4-digit years (1000-2999)
        r'\b(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])(1[0-9]{3}|2[0-9]{3})\b',  # MMDDYYYY
        r'\b(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])[0-9]{2}\b'  # DDMMYY
    ]
    combined_pattern = '|'.join(date_patterns)
    matches = re.findall(combined_pattern, password)
    if matches:
        feedback.append("Password contains date format.")
        print(f'Password contains date' + str(matches))
        



    # Minimum and maximum repeated characters
    if re.search(r'(.)\1{2,}', password) is None:
        score += 10
    else:
        feedback.append("Password contains repeated characters.")
        penalty += 5  # Penalty for repeated characters
    
    # No sequential characters
    contains_sequence = False
    for seq in sequences:
        if seq in password:
            contains_sequence = True
            print(f'sequence is : {seq}')
            feedback.append("Password contains sequential characters.")
            penalty += 10  # Penalty for sequential characters
            break
    if not contains_sequence:
        score += 5

     # No email address
    pattern = r'(' + '|'.join(re.escape(domain) for domain in domain_names) + r')\b'
    matches = re.findall(pattern, password, re.IGNORECASE)

    if matches:
        feedback.append("Password contains an email address")
        penalty += 50 # Penalty for email address
        print(matches)
    
    return penalty, feedback