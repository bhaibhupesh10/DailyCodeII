package Patterns;

       class C1 {
           public int x=5;
        protected float pie = 3.141f;
       int z= 8;
       private int a = 100;
       public void meth1(){
           System.out.println(x);
           System.out.println(pie);
           System.out.println(z);
           System.out.println(a);
       }
       }
public class display4 {
    public static void main(String[] args) {
     C1 c = new C1();
       c.meth1();
        System.out.println(c.x);
        System.out.println(c.pie);
        System.out.println(c.z);
//        System.out.println(c.a);



    }
}
