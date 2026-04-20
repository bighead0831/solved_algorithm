import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int Y = sc.nextInt();

        boolean result = false;

        if(Y%4 == 0) {
            result = true;
            if(Y%100==0&&Y%400!=0)
                result = false;
        }
        System.out.println(result);
    }
}