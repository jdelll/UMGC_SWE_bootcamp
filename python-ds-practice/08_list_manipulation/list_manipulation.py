def list_manipulation(lst, command, location, value=None):
    if(location == "beginning"):
        if(command == "add"):
            lst[:0] = [value]
            return lst
        if(command == "remove"):
            to_remove = lst[0]
            lst = lst[1:]
            return to_remove
    if(location == "end"):
        if(command == "add"):
            lst.append(value)
            return lst
        if(command == "remove"):
            to_remove = lst[-1]
            lst = lst[:-1]
            return to_remove
    else:
        return None
    """Mutate lst to add/remove from beginning or end.

    - lst: list of values
    - command: command, either "remove" or "add"
    - location: location to remove/add, either "beginning" or "end"
    - value: when adding, value to add

    remove: remove item at beginning or end, and return item removed

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'remove', 'end')
        3

        >>> list_manipulation(lst, 'remove', 'beginning')
        1

        >>> lst
        [2]

    add: add item at beginning/end, and return list

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'add', 'beginning', 20)
        [20, 1, 2, 3]

        >>> list_manipulation(lst, 'add', 'end', 30)
        [20, 1, 2, 3, 30]

        >>> lst
        [20, 1, 2, 3, 30]

    Invalid commands or locations should return None:

        >>> list_manipulation(lst, 'foo', 'end') is None
        True

        >>> list_manipulation(lst, 'add', 'dunno') is None
        True
    """
