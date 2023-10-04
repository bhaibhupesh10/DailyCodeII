package Patterns;

public class Displaying1 {
    public static void main(String[] args) {
        System.out.println("Displaying again ");
        for(int i =1;i<=9;i++)
        {
            for(int j=1;j<=i;j++)
            {
                System.out.print(" ");
                System.out.print(j);
            }
            System.out.println();
        }
    }
}
