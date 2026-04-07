class Animal:
    def __init__(self, name: str, age: int, species: str) -> None:
        self.name = name
        self.age = age
        self.species = species

    def speak(self) -> str:
        return f"{self.name} makes a sound."

    def describe(self) -> str:
        return f"{self.name} is a {self.species}, {self.age} year(s) old."

    def __str__(self) -> str:
        return f"Animal(name={self.name}, age={self.age}, species={self.species})"


class Dog(Animal):
    def __init__(self, name: str, age: int, breed: str) -> None:
        super().__init__(name, age, species="Dog")
        self.breed = breed

    def speak(self) -> str:
        return f"{self.name} says: Woof!"

    def fetch(self, item: str) -> str:
        return f"{self.name} fetched the {item}!"

    def __str__(self) -> str:
        return f"Dog(name={self.name}, age={self.age}, breed={self.breed})"


class Cat(Animal):
    def __init__(self, name: str, age: int, indoor: bool) -> None:
        super().__init__(name, age, species="Cat")
        self.indoor = indoor

    def speak(self) -> str:
        return f"{self.name} says: Meow!"

    def is_indoor(self) -> str:
        status = "an indoor" if self.indoor else "an outdoor"
        return f"{self.name} is {status} cat."

    def __str__(self) -> str:
        return f"Cat(name={self.name}, age={self.age}, indoor={self.indoor})"

