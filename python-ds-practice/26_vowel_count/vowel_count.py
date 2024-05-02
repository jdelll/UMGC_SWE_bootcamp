def vowel_count(phrase):
    vowels = {"a":0,"e":0,"i":0,"o":0,"u":0}
    phrase = phrase.lower()
    for vowel in vowels.keys():
        vowels[vowel] = phrase.count(vowel)
    return vowels
        

    """Return frequency map of vowels, case-insensitive.
s
        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """