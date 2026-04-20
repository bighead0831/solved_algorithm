import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();
        while(Integer.parseInt(input)<5) {
            int n = Integer.parseInt(input);
            if(n==1) System.out.println("John");
            else if(n==2) System.out.println("Tom");
            else if(n==3) System.out.println("Paul");
            else if(n==4) System.out.println("Sam");
            input = br.readLine();
        }
        System.out.println("Vacancy");
    }
}