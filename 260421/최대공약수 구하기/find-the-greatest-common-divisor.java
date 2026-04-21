import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();

        System.out.println(gcd(n,m));
    }

    static int gcd(int n, int m) { // 유클리도 호제법, 재귀방식
        if(m==0) return n;
        return gcd(m, n%m);
    }   
}