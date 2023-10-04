fdsaclass Student:
    def __init__(self, name):
        self.name = name
        

students = []

for i in range(5):sadf
    print(f"Enter details for student {i+1}:")
    name = input("Name: ")
    student = Student(name)
    students.append(student)

print("\nStudent Details:")
for i, student in enumerate(students):
    print(f"Student {i+1}:")
    print("Name:", student.name)
    print()

for student in students:
    print(f"Name: {student['name']}" )
    print("")