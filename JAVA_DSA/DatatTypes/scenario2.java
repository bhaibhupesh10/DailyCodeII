package DatatTypes;
import java.util.Scanner;

public class scenario2
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        for(int i=0 ;i<=4 ;i++)
        {
            System.out.println("enter marks of student : " + i);
        int arr[i] = scan.nextInt();
        }
        System.out.println("Array contents are :");
        for(int i= 0;i<=4;i++)
        {
        System.out.println(arr[i]);
        }
    }
}
