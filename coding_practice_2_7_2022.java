import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class coding_practice_2_7_2022 {
    public static void main(String[] args) {
        System.out.println("_________________________Question One________________________________");
        //1) Write a function that returns true if a string consists of ascending or ascending AND consecutive numbers.
        System.out.println("232425");
        System.out.println("expecting: true= "+ascending("232425"));// --> true
        System.out.println("2324256");
        System.out.println("expecting: false= "+ascending("2324256"));// --> false
        System.out.println("444445");
        System.out.println("expecting: true= "+ascending("444445"));// --> true
        System.out.println("123124126");
        System.out.println("expecting: false= "+ascending("123124126"));
        System.out.println("0123456789");
        System.out.println("expecting: true= "+ascending("0123456789"));
        System.out.println("_________________________Question Two________________________________");
        //2) Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.
        System.out.println("result in array "+Arrays.deepToString(squarePatch(3)));
        printSquare(squarePatch(3));
        System.out.println("result in array "+Arrays.deepToString(squarePatch(5)));
        printSquare(squarePatch(5));
        System.out.println("result in array "+Arrays.deepToString(squarePatch(1)));
        printSquare(squarePatch(1));
        System.out.println("result in array "+Arrays.deepToString(squarePatch(0)));
        printSquare(squarePatch(0));
        System.out.println("result in array "+Arrays.deepToString(squarePatch(-1)));
        printSquare(squarePatch(-1));
    }
    public static boolean ascending(String s){
        int len=s.length();
        boolean result=true;
        for(int i=1;i<len/2+1;i++){
            if(len%i==0) {
                result=true;
                int pre=Integer.parseInt(s.substring(0,i));
                for(int j=i; j<len-i+1;j+=i){
                    int cur=Integer.parseInt(s.substring(j,j+i));
                    if(!(cur>pre && cur-pre==1)) {
                        result=false;
                        break;
                    }
                    pre=cur;
                }
                if(result)return result;
            }
        }
        return result;
    }
    public static int[][] squarePatch(int num){
        if(num<0) return new int[][]{};
        int[][] square=new int[num][num];
        for(int[] i: square){
            for (int j=0; j<num; j++){
                i[j]=num;
            }
        }
        return square;
    }
    public static void printSquare(int[][] square){
        System.out.print("result in square ");
        System.out.print("[");
        for(int i=0; i< square.length;i++){
            if(i==0) System.out.println("");
            System.out.print(Arrays.toString(square[i]));
            if(i!=square.length-1) System.out.print(",");
            System.out.println("");
        }
        System.out.println("]");
    }
}
