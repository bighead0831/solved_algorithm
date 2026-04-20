import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        String s = "";
        if(m>=3&&m<=5) s = "Spring";
        if(m>=6&&m<=8) s = "Summer";
        if(m>=9&&m<=11) s = "Fall";
        if(m<=2||m==12) s = "Winter";
        System.out.println(s);
    }
}