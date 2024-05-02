def flip_case(phrase, to_swap):
    flipped = ""
    for letter in phrase:
        if letter == to_swap or letter == to_swap.swapcase():
            flipped = flipped + letter.swapcase()
        else:
            flipped = flipped + letter
    return flipped
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
