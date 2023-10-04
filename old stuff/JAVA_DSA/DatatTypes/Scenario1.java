package DatatTypes;
import java.util.Scanner;
public class Scenario1 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int arr[] = new int[5];

        System.out.println("enter marks of students: ");
         arr[0] = scan.nextInt();
         arr[1] = scan.nextInt();
         arr[2] = scan.nextInt();
         arr[3] = scan.nextInt();
         arr[4] = scan.nextInt();

        System.out.print("Array contents are: ");
        System.out.print(arr[0]);
        System.out.print(" "+ arr[1]);
        System.out.print(" "+arr[2]);
        System.out.print(" " +arr[3]);
        System.out.print(" "  +arr[4]);
        System.out.println();
    }

}
