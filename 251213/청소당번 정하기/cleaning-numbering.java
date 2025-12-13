import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int cntClass = 0;
        int cntAisle = 0;
        int cntToilet = 0;
        for(int i=1; i<=n; i++) {
            if(i%12==0)
                cntToilet++;
            else if(i%3==0)
                cntAisle++;
            else if(i%2==0)
                cntClass++;
        }
        System.out.print(cntClass+" "+cntAisle+" "+cntToilet);
    }
}