import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        char r = 'E';

        while(n<=100) {
            if(n>=90) r='A';
            else if(n>=80) r='B';
            else if(n>=70) r='C';
            else if(n>=60) r='D';
            else  r='F';
            System.out.print(r+" ");
            n++;
        }
    }
}