package RevisionFoPlacement;

public class largetNum {
    public static void largestNumber(int number[]){
        int largest = Integer.MIN_VALUE;
        int smallest = Integer.MAX_VALUE;

        for(int i = 0;i<number.length;i++){
            if(number[i] > largest){
                largest = number[i];
            }
            if(number[i] < smallest){
                smallest = number[i];
            }
        }
        System.out.println(largest);
        System.out.println(smallest);
    }

    public static void main(String[] args) {
        int number[] = {1, 2, 5, 3, 4};
        largestNumber(number);
    }
}
