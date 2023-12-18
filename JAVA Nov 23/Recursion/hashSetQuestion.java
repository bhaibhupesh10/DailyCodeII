package Recursion;
    import java.util.HashSet;
import java.util.Set;

    public class hashSetQuestion {
        public static void main(String[] args) {
            Set<String> uniqueWords = new HashSet<>();

            // Adding elements to the set
            uniqueWords.add("apple");
            uniqueWords.add("banana");
            uniqueWords.add("orange");
            uniqueWords.add("apple"); // Duplicate, won't be added

            System.out.println("Set elements: " + uniqueWords);

            // Checking if an element is present
            System.out.println("Contains 'banana': " + uniqueWords.contains("banana"));

            // Removing an element
            uniqueWords.remove("orange");
            System.out.println("Set elements after removal: " + uniqueWords);
        }
    }

