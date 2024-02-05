def capitalize(phrase):
    phrase_list = phrase.split(" ")
    first_word = list(phrase_list[0])
    first_word[0] = first_word[0].upper()
    phrase_list[0] = "".join(first_word)
    return " ".join(phrase_list)
    """Capitalize first letter of first word of phrase.

        >>> capitalize('python')
        'Python'

        >>> capitalize('only first word')
        'Only first word'
    """