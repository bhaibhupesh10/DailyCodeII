package Recursion;

public class HollowCylinder{
    public static void hollow_cynlinder(int totRows, int totCols){
        for(int i = 1;i<=totRows;i++){
            for(int j = 1;j<=totCols;j++){
                if(i==1 || i== totRows || j == 1 || j == totCols){
                    System.out.print("*");
                }else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }

    public static void inverted_rotated_half_pyramid(int n){
         //outer
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n-i;j++) {
                System.out.print(" ");
                }
             // stars
            for(int j=1;j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void inverted_half_pyramid_withNumbers(int n){
        for(int i = 1;i<=n;i++){
            for(int j = 1;j<=n-i+1;j++){
                System.out.print(j+" ");
            }
            System.out.println();
        }
    }

    public static void floydsNumber(int n){
        int counter=1;
        for(int i =1;i<=n;i++){
            for(int j=1;j<=i;j++){
                System.out.print(counter+" ");
                counter++;
            }
        System.out.println();
        }
    }

    public static void zeroOne(int n){
        for(int i = 1;i<=n;i++){
            for(int j=1;j<=i;j++){
                if((i+j)%2==0){
                    System.out.print("1");
                } else{
                    System.out.print("0");
                }
            }
            System.out.println();
        }
    }
 public static void main(String[] args){
     hollow_cynlinder(10, 6);
     inverted_rotated_half_pyramid(4);
     inverted_half_pyramid_withNumbers(5);
     floydsNumber(5);
     zeroOne(6);
    }
}