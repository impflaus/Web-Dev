from models import Animal, Dog, Cat


def main() -> None:
    dog = Dog(name="Rex", age=4, breed="Golden Retriever")
    cat = Cat(name="Murka", age=2, indoor=True)
    generic = Animal(name="Unknown", age=1, species="Unknown")

    animals = [generic, dog, cat]

    print("--- __str__ ---")
    for animal in animals:
        print(animal)

    print("\n--- describe() ---")
    for animal in animals:
        print(animal.describe())

    print("\n--- speak() ---")
    for animal in animals:
        print(animal.speak())

    print("\n--- methods ---")
    print(dog.fetch("ball"))
    print(cat.is_indoor())


if __name__ == "__main__":
    main()