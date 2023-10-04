package KODNEST;

public class StudentApp {
    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student();
        Student s3 = new Student();

        s1.eat();
        s2.sleep();
        s3.StudentStudy();

            s1.name = "Bhupesh";
            s1.age = 23;
            s1.gender = "Male";
            s1.usn = 11234;


        System.out.println(s1.name + "\n" + s1.age + "\n" + s1.gender + "\n"+ s1.usn);
        System.out.println();

     }
}
