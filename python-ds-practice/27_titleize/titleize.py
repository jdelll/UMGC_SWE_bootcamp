def titleize(phrase):
    phrase_list = phrase.split(" ")
    for index1,word in enumerate(phrase_list):
        new_word=[]
        for index2, letter in enumerate(word):
            if index2 == 0:
                new_word.append(letter.upper())
            else:
                new_word.append(letter.lower())
        phrase_list[index1]="".join(new_word)
    
    return " ".join(phrase_list)

    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
