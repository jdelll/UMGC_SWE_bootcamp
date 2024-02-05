def same_frequency(num1, num2):

    freq1 = {}
    freq2 = {}

    num1 = str(num1)
    num2 = str(num2)

    for num in num1:
        freq1[num] = num1.count(num)

    for num in num2:
        freq2[num] = num2.count(num)

    if(freq1 == freq2):
        return True
    else:
        return False    

    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """