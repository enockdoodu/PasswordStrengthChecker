import string
import math 

has_uppercase = has_lowercase = has_digit = has_special = False 

def calculate_entropy(password):
    char_set_size = 0
    print(f'password is {password}')
    
    if any(char in string.ascii_lowercase for char in password):
        char_set_size += 26
    if any(char in string.ascii_uppercase for char in password):
        char_set_size += 26
    if any(char in string.digits for char in password):
        char_set_size += 10
    if any(char in string.punctuation for char in password):
        char_set_size += 32
    
    if char_set_size == 0:
        return 0

    entropy = math.log2(char_set_size**len(password))
    print(f'{char_set_size**len(password)} this is character: {char_set_size} this is lenght: {len(password)}')
    print(entropy)
    return entropy, char_set_size
