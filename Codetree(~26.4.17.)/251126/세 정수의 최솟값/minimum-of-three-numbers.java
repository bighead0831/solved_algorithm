import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        int result = 0;
        if(a<=b&&a<=c)
            result = a;
        else if(b<=a&&b<=c)
            result = b;
        else if(c<=a&&c<=b)
            result = c;
        
        System.out.println(result);
    }
}