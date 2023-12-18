package Recursion;

import java.util.Scanner;

public class binarySearch {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        // input sorted array
        System.out.println("enter the size of array");
        int size = scan.nextInt();
        int array[] = new int[size];

        System.out.println("enter the element of array in sorted order");
        for(int i = 0;i<size;i++){
            array[i] = scan.nextInt();
        }

        // input search keys
        System.out.print("enter the element to search: ");
        int key = scan.nextInt();

        // perform binary search algorithm
        int result = binarySearch1(array, key);

        //display the result
        if(result!=-1){
            System.out.println("element" + key + "found at index " + result);
        }else {
            System.out.println("element " + key + "not found in the array");
        }
    }

    // Binary search method
    static int binarySearch1(int[] array, int key){
        int left = 0;
        int right = array.length-1;

        while(left<=right){
            int mid = left + (right - left)/2;

            // check if the key is present at the middle
            if(array[mid]== key){
                return mid;
            }
            // if the key is present at the middle
            if(array[mid]==key){
                return mid;
            }
            // if the key is greater, ignore the left half
            if (array[mid]<key){
                left=mid+1;
            }
            //if the key is smaller, ignore the right half
            else{
                right= mid-1;
            }
        }
        return -1;
    }
}
