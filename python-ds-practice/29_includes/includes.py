def includes(collection, sought, start=None):

    if(isinstance(collection,dict)):
        for index,item in enumerate(collection.values()):
            if(sought == item):
                if(start):
                    if(start < index):
                        return True
                else:
                    return True
        return False

    else:
        for index,item in enumerate(collection):
            if(sought == item):
                if(start and not isinstance(collection,set)):
                    if(start < index):
                        return True
                else:
                    return True
        return False
                

    """Is sought in collection, starting at index start?

    Return True/False if sought is in the given collection:
    - lists/strings/sets/tuples: returns True/False if sought present
    - dictionaries: return True/False if *value* of sought in dictionary

    If string/list/tuple and `start` is provided, starts searching only at that
    index. This `start` is ignored for sets/dictionaries, since they aren't
    ordered.

        >>> includes([1, 2, 3], 1)
        True

        >>> includes([1, 2, 3], 1, 2)
        False

        >>> includes("hello", "o")
        True

        >>> includes(('Elmo', 5, 'red'), 'red', 1)
        True

        >>> includes({1, 2, 3}, 1)
        True

        >>> includes({1, 2, 3}, 1, 3)  # "start" ignored for sets!
        True

        >>> includes({"apple": "red", "berry": "blue"}, "blue")
        True
    """