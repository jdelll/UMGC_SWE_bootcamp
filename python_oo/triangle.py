class Triangle:
    def __init__(self,a,b):
        self.a = a
        self.b = b

    def __repr__(self):
        return f"Triangle(a={self.a}, b={self.b})"

    def __str__(self):
        return self.describe()
    
    def get_hypotenuse(self):
        return sqrt(self.a**2 + self.b **2)

    def get_area(self):
        return self.a * self.b / 2
    
    #this is called a decorator, it alters the behavior of the method after it
    @classmethod
    def random(cls):
        cls(234,54)

    #class constructors can inherit a class

#docstrings are typically used to describe methods. for more complicated cases, helps to define attributes/inputs
#when you run help, all of these docstrings will be shown alongside methods
class ColoredTriangle(Triangle):
    """Triangle that has a color.
    Attributes:
    a:
        length of side a
    b: 
        length of side b
    
    """
    #get parent class ['super()'], class its '__init__()'
    #double underscore or "dunder" methods are special
    #
    def __init__(self,a,b,color):
        super().__init__(a,b)

        self.color = color
    
    def describe(self):
        """Class method which returns string describing triangle"""
        msg = super().describe() + f"I am {self.color}"


