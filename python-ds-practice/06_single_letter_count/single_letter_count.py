def single_letter_count(word, letter):
    lower_word = word.lower()
    lower_letter = letter.lower()
    return lower_word.count(lower_letter)
    """How many times does letter appear in word (case-insensitively)?
    
        >>> single_letter_count('Hello World', 'h')
        1
        
        >>> single_letter_count('Hello World', 'z')
        0
        
        >>> single_letter_count("Hello World", 'l')
        3
    """