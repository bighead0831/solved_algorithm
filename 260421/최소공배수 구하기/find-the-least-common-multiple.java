import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        System.out.println(lcm(n, m, gcd(n, m)));
    }

    static int lcm(int n, int m, int g) { // 최소공배수 메서드
        return n*m/g;
    }

    static int gcd(int n, int m) { // 유클리드 호제법으로 재귀방식을 이용한 최대공약수 메서드
        if(m==0) return n;
        return gcd(m, n%m);
    } 
}