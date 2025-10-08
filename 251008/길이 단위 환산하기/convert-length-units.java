import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Please write your code here.
        Scanner sc = new Scanner(System.in);

        double n = sc.nextDouble();

        double result = n*30.48;

        System.out.printf("%.1f\n", result);
        
    }
}