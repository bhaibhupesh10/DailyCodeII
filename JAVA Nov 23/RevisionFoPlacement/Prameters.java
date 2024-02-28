package RevisionFoPlacement;

import java.util.Scanner;

public class Prameters {

    // basic method of calling sum
    public static void main(String [] args){
        CalculateSum();
    }
    public static void CalculateSum(){
        Scanner scan = new Scanner(System.in);
        System.out.println("enter a ");
        int a = scan.nextInt();
        System.out.println("enter b ");
        int b = scan.nextInt();

        int c = a + b;
        System.out.println("sum is " + c);
    }
}
