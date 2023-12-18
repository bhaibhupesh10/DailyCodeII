package Recursion;
    import java.util.Scanner;

    public class PerfectNumberChecker {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            System.out.print("Enter a number: ");
            int number = scanner.nextInt();

            if (isPerfectNumber(number)) {
                System.out.println(number + " is a perfect number.");
            } else {
                System.out.println(number + " is not a perfect number.");
            }

            scanner.close();
        }

        // Function to check if a number is a perfect number
        private static boolean isPerfectNumber(int number) {
            if (number <= 1) {
                return false;
            }

            int sum = 1; // Start with 1 since every number is divisible by 1

            // Check divisors up to the square root of the number
            for (int i = 2; i * i <= number; i++) {
                if (number % i == 0) {
                    sum += i;

                    // If the divisors are distinct, add the corresponding divisor
                    if (i != (number / i)) {
                        sum += (number / i);
                    }
                }
            }

            // Check if the sum of divisors equals the original number
            return (sum == number);
        }

}
