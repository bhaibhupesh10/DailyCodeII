package RevisionFoPlacement;


public class primeInRange {
    public static boolean isPrime(int num) {
        if (num <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % 2 == 0) {
                return false;
            }
        }
        return true;
    }
        public static void primeinRange(int n){
            for (int i = 2; i <= n; i++) {
                if (isPrime(i)) {
                    System.out.print(i + " ");
                }
            }
            System.out.println();
        }
        public static void main(String[] args) {
            primeinRange(29);
        }
    }
