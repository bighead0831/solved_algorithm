import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        System.out.println(lcd(n, m, gcd(n, m)));
    }

    static int lcd(int n, int m, int g) {
        return n*m/g;
    }

    static int gcd(int n, int m) {
        if(m==0) return n;
        return gcd(m, n%m);
    } 
}