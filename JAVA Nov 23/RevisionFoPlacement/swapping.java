package RevisionFoPlacement;

public class swapping {
    public static void swap(int a, int b){
        int temp = a;
            a  = b;
            b = temp;
        System.out.println(a+ " "+ b);
    }
    public static void main(String[] args) {
//       int a = 5;
//       int b = 10;

       swap(5, 3);
    }
}
