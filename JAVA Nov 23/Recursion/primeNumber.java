package Recursion;


        public class primeNumber {

            // Function to check if a number is prime
            static boolean isPrime(int number) {
                if (number <= 1) {
                    return false;
                }
                for (int i = 2; i <= Math.sqrt(number); i++) {
                    if (number % i == 0) {
                        return false;
                    }
                }
                return true;
            }

            // Function to print prime numbers in a given range
            static void printPrimesInRange(int start, int end) {
                System.out.println("Prime numbers between " + start + " and " + end + ":");
                for (int i = start; i <= end; i++) {
                    if (isPrime(i)) {
                        System.out.print(i + " ");
                    }
                }
                System.out.println(); // Move to the next line after printing primes
            }

            public static void main(String[] args) {
                int startRange = 1;
                int endRange = 50;

                printPrimesInRange(startRange, endRange);
            }
        }
