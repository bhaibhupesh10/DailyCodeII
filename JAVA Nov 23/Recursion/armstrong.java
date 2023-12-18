package Recursion;
    import java.util.Scanner;
public class armstrong {

    public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            System.out.print("Enter the starting number: ");
            int start = scanner.nextInt();

            System.out.print("Enter the ending number: ");
            int end = scanner.nextInt();

            System.out.println("Armstrong numbers between " + start + " and " + end + " are:");

            for (int i = start; i <= end; i++) {
                if (isArmstrongNumber(i)) {
                    System.out.print(i + " ");
                }
            }

            scanner.close();
        }

        // Function to check if a number is an Armstrong number
        private static boolean isArmstrongNumber(int number) {
            int originalNumber, remainder, result = 0, n = 0;

            originalNumber = number;

            // Find the number of digits in the number
            for (originalNumber = number; originalNumber != 0; originalNumber /= 10, ++n);

            originalNumber = number;

            // Calculate the result
            while (originalNumber != 0) {
                remainder = originalNumber % 10;
                result += Math.pow(remainder, n);
                originalNumber /= 10;
            }

            // Check if the number is Armstrong
            return result == number;
        }
    }




