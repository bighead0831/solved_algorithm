import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        
        if((a<b&&c<a)||(a<c&&b<a))
            System.out.println(a);
        else if((b<c&&a<b)||(b<a&&c<b))
            System.out.println(b);
        else if((c<b&&a<c)||(c<a&&b<c))
            System.out.println(c);
    }
}