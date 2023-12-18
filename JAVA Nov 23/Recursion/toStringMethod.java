package Recursion;


    class Student {
        private String name;
        private int rollNumber;

        // Constructor
        public Student(String name, int rollNumber) {
            this.name = name;
            this.rollNumber = rollNumber;
        }

        // Override toString() method
        @Override
        public String toString() {
            return "Student [Name: " + name + ", Roll Number: " + rollNumber + "]";
        }
    }

    public class toStringMethod {
        public static void main(String[] args) {
            // Create a Student object
            Student student = new Student("John Doe", 12345);

            // Print the object using toString()
            System.out.println("Using toString() method:");
            System.out.println(student);

            // Without using toString() (implicitly calls toString() internally)
            System.out.println("\nWithout using toString() method (implicitly called):");
            System.out.println(student.toString());
        }
    }

