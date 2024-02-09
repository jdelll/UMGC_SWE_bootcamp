import random

class WordFinder:
    """Word Finder: finds random words from a dictionary."""

    def __init__(self,wordfile="words.txt"):
        """Word finder generator
        Attributes:
        words: list of words contained in input file
        """
        self.words = self.read_word_file(wordfile)
        print(f"{len(self.words)} words read")

    def random(self):
        return random.choice(self.words)

    def read_word_file(self,wordfile):
        """read from input file path, create list of words from each line, ignore new line character"""
        file = open(wordfile,"r")
        words = []
        for line in file:
            words.append(line.strip('\n\r'))
        file.close()
        return words

class SpecialWordFinder(WordFinder):
    """Special word finder"""

    def __init__(self,wordfile="words.txt"):
        """Special word finder generator
        Attributes:
        words: list of words contained in input file
        """
        self.words = self.read_word_file(wordfile)
        self.filter()
        print(f"{len(self.words)} words read")
    
    def filter(self):
        self.words = [word for word in self.words if word != "" and not "#" in word]
        