package Recursion;

public class fibonnacci {
    public static void main(String[] args){
        int n1=0, n2=1, i, n3, count=10;
        System.out.print(n1+" " +n2); // print zero and one

        for(i=2;i<count;i++){
            n3=n1+n2;
            System.out.print(" " + n3);
            n1=n2;
            n2=n3;
        }
    }
}

