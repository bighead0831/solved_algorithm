import java.util.Scanner;

class Print { // 클래스로도 구현해봄
    void printing(int n) {
        for(int i=0; i<n; i++) {
            System.out.println("12345^&*()_");
        }
    }
}


public class Main {
    // public static void printing(int n) {
    //     for(int i=0; i<n; i++) {
    //         System.out.println("12345^&*()_");
    //     }
    // }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // printing(n);
        Print print = new Print();
        print.printing(n);
    }
}