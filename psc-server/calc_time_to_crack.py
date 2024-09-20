from calc_entropy import calculate_entropy
from calc_score import check_password

def calculate_time_to_crack(password):
    guesses_per_second = pow(10, 9)
    processing_element = 8699904
    en,char_set_size = calculate_entropy(password)
    penalty , fd = check_password(password)
    entropy = en - penalty
    print(f'penalty is {penalty} new entropy is {entropy}')
    total_combinations = pow(2, entropy)
    
    time_to_crack = total_combinations / (guesses_per_second * processing_element)
    print(f' this is char size {char_set_size} and {time_to_crack}')

    if time_to_crack < 1:
        crack_time = 'instantly'
    elif time_to_crack < 60:
        crack_time = f'{round(time_to_crack)} second' if round(time_to_crack) == 1 else f'{round(time_to_crack)} seconds'
    elif time_to_crack < 3600:
        crack_time = f'{round(time_to_crack / 60)} minute' if round(time_to_crack/60) == 1 else f'{round(time_to_crack / 60)} minutes'
    elif time_to_crack < 86400:
        crack_time = f'{round(time_to_crack / 3600)} hour' if round(time_to_crack/3600) == 1 else f'{round(time_to_crack / 3600)} hours'
    elif time_to_crack < 604800:
        crack_time = f'{round(time_to_crack / 86400)} day' if round(time_to_crack/86400) == 1 else f'{round(time_to_crack / 86400)} days'
    elif time_to_crack < 2592000:
        crack_time = f'{round(time_to_crack / 604800)} week' if round(time_to_crack/604800) == 1 else f'{round(time_to_crack / 604800)} weeks'
    elif time_to_crack < 31536000:
        crack_time = f'{round(time_to_crack / 2592000)} month' if round(time_to_crack/2592000) == 1 else f'{round(time_to_crack / 2592000)} months'
    elif time_to_crack < 315360000:
        crack_time = f'{round(time_to_crack / 31536000)} year' if round(time_to_crack/31536000) == 1 else f'{round(time_to_crack / 31536000)} years'
    elif time_to_crack < 3153600000:
        crack_time = f'{round(time_to_crack / 315360000)} decade' if round(time_to_crack/315360000) == 1 else f'{round(time_to_crack / 315360000)} decades'
    elif time_to_crack < 31536000000:
        crack_time = f'{round(time_to_crack / 3153600000)} century' if round(time_to_crack/3153600000) == 1 else f'{round(time_to_crack / 3153600000)} centuries'
    else:
        crack_time =  'millennia'

    
    return max(entropy, 5), crack_time