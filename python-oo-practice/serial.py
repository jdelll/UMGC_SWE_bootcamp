"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self,start,counter=-1):
         """Serial generator
         Attributes:
         start: integer to start generating from
         counter: how many numbers have been generated

        """
        self.start = start
        self.counter = counter

    def generate(self):
        """Generates a new number 1 higher than the last number generated"""
        self.counter += 1
        return self.start + self.counter
    
    def reset(self):
        """Reset counter, successive numbers will be generated from start"""
        self.counter = -1
