import java.util.Scanner;

public class Main {
    public static int check(char symp, int temp, int emergency) {
        if(symp == 'Y') {
            if(temp >= 37) // A
                emergency++;
        }
        return emergency;
    }

    public static void main(String[] args) {
        int emergency = 0;

        Scanner sc = new Scanner(System.in);
        char symp1 = sc.next().charAt(0);
        int temp1 = sc.nextInt();
        char symp2 = sc.next().charAt(0);
        int temp2 = sc.nextInt();
        char symp3 = sc.next().charAt(0);
        int temp3 = sc.nextInt();

        emergency = check(symp1, temp1, emergency);
        emergency = check(symp2, temp2, emergency);
        emergency = check(symp3, temp3, emergency);

        if(emergency>=2)
            System.out.println('E');
        else
            System.out.println('N');
    }
}