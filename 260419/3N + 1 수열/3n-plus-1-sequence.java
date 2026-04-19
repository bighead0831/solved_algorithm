import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int cnt = 0;
        while(n!=1) {
            if(n%2==0) {
                n = n/2;
            } else {
                n = n*3+1;
            }
            cnt++;
        }
        System.out.println(cnt);
    }
}