import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int aAge = sc.nextInt();
        char aSex = sc.next().charAt(0);
        int bAge = sc.nextInt();
        char bSex = sc.next().charAt(0);

        System.out.println((aAge>=19&&aSex=='M')||(bAge>=19&&bSex=='M')?1:0);
    }
}