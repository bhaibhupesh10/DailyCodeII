
students = []

for i in range(5):
    print(f"Enter details for Student {i+1}:")
    name = input("Name: ")

    student = {
        "name": name,
    }
    students.append(student)
    print("")

print("Student Details:")
for student in students:
    print(f"Name: {student['name']}")
    print("")
