package Recursion;

public class swapChar {
        public static void main(String[] args) {
            String originalString = "Hello, World!";
            String swappedString = swapAdjacentChars(originalString);

            System.out.println("Original String: " + originalString);
            System.out.println("Swapped String: " + swappedString);
        }

        static String swapAdjacentChars(String input) {
            char[] charArray = input.toCharArray();

            for (int i = 0; i < charArray.length - 1; i += 2) {
                // Swap characters at even indices with the next odd indices
                char temp = charArray[i];
                charArray[i] = charArray[i + 1];
                charArray[i + 1] = temp;
            }

            // Convert the char array back to a string
            return new String(charArray);
        }
    }

