package Recursion;

public class codingTestQue1 {


        public static int minStepsToTransform(String A, String B) {
            int m = A.length();
            int n = B.length();

            // Create a table to store subproblem results
            int[][] dp = new int[m + 1][n + 1];

            // Fill the table using bottom-up dynamic programming
            for (int i = 0; i <= m; i++) {
                for (int j = 0; j <= n; j++) {
                    if (i == 0) {
                        // If string A is empty, the only option is to insert characters from B
                        dp[i][j] = j;
                    } else if (j == 0) {
                        // If string B is empty, the only option is to remove characters from A
                        dp[i][j] = i;
                    } else if (A.charAt(i - 1) == B.charAt(j - 1)) {
                        // If the last characters match, no operation is needed
                        dp[i][j] = dp[i - 1][j - 1];
                    } else {
                        // If the last characters don't match, consider insert operation
                        dp[i][j] = 1 + dp[i][j - 1];
                    }
                }
            }

            // The result is stored in the bottom-right cell of the table
            return dp[m][n];
        }

        public static void main(String[] args) {
            String A = "abc";
            String B = "def";

            int result = minStepsToTransform(A, B);

            System.out.println("Minimum number of steps: " + result);
        }
    }

