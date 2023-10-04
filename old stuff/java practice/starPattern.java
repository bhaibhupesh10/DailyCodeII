public class starPattern {
    public static void NumberPattern(int n) {
        for(int rows = 1;rows<= n;rows++) {
            for (int col = 1; col <= rows; col++) {
                System.out.print(col +" ");
            }
            System.out.println();

        }
    }


    public static void main(String[ ] args) {
    NumberPattern(4);
    }
}
