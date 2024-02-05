def multiple_letter_count(phrase):
    letter_count_dict = {}
    for letter in phrase:
        letter_count_dict.update({letter: phrase.count(letter)})
    return letter_count_dict
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """