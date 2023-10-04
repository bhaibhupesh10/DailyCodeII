package DatatTypes;

import Patterns.display5;


class Using extends display5 {
    void meth2() {
        System.out.println(x);
       // System.out.println(y);
        //System.out.println(z);
        //System.out.println(a);


    }



}



public class WorldModifier {
    public static void main(String[] args) {
        System.out.println("I'm using packages");

        display5 c =  new display5();

        System.out.println(c.x);
//        System.out.println(c.pie);
//           System.out.println(c.z);
    }
}
