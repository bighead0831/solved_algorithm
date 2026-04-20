import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int sex = sc.nextInt();
        int age = sc.nextInt();

        String result = "";

        if(sex == 0) {
            if(age<19) {
                result = "BOY";
            } else {
                result = "MAN";
            }
        } else {
            if(age<19) {
                result = "GIRL";
            } else {
                result = "WOMAN";
            }
        }

        System.out.println(result);
    }
}