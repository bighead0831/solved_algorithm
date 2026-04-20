import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int sum = 0;
        int result = 0;
        for(int i=1; i<=100; i++) {
            sum += i;
            result = i;
            if(sum>=n) break;
        }
        System.out.println(result);
    }
}