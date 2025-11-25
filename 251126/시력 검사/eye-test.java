import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double a = sc.nextDouble();
        double b = sc.nextDouble();
        
        String s = "";
        if(a>=1.0&&b>=1.0) s="High";
        else if(a>=0.5&&b>=0.5) s="Middle";
        else s="Low";

        System.out.println(s);
    }
}