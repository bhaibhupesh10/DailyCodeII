public class StudentApp {
    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student();
        Student s3 = new Student();

        s1.eat();
        s2.sleep();
        s3.study();


        s1.name = "Raju";
        s1.age = 23;
        s1.gender = "male";
        s1.usn = 123;

        System.out.println(s1.name);
        System.out.println(s1.age);
        System.out.println(s1.gender);
        System.out.println(s1.usn);

        s2.name="bhupesh";
        s2.age=22;
        s2.gender="male";
        s2.usn=32;

        System.out.println(s2.name);
        System.out.println(s2.age);
        System.out.println(s2.gender);
        System.out.println(s2.usn);

    }
}

