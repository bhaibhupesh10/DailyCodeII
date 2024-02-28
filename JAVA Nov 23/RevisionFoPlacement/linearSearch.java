package RevisionFoPlacement;

import java.util.Scanner;

public class linearSearch {
    public static int linearS(int number[], int key) {
        for (int i = 0; i <= number.length; i++) {
            if (number[i] == key) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int number[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        Scanner scan = new Scanner(System.in);
        System.out.println("enter key to search: ");
        int key = scan.nextInt();
        int index = linearS(number, key);
        if (index == -1) {
            System.out.println("not found");
        } else {
            System.out.println("key is at index " + index);
        }
    }
}