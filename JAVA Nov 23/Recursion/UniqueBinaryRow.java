package Recursion;
    import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class UniqueBinaryRow {

        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            System.out.print("Enter the number of binary rows: ");
            int n = scanner.nextInt();

            String[] binaryRows = new String[n];

            // Input binary rows
            System.out.println("Enter the binary rows:");
            for (int i = 0; i < n; i++) {
                binaryRows[i] = scanner.next();
            }

            // Find the unrepeated binary row
            String unrepeatedRow = findUnrepeatedRow(binaryRows);

            // Display the result
            System.out.println("Unrepeated binary row: " + unrepeatedRow);
        }

        static String findUnrepeatedRow(String[] binaryRows) {
            Set<String> seenRows = new HashSet<>();

            for (String row : binaryRows) {
                // If the row is not in the set, add it
                if (!seenRows.contains(row)) {
                    seenRows.add(row);
                } else {
                    // If the row is already in the set, remove it (considering it repeated)
                    seenRows.remove(row);
                }
            }

            // At this point, the set should contain only the unrepeated row
            // If there are multiple unrepeated rows, you might need to modify the logic accordingly
            return seenRows.iterator().next();
        }
    }

