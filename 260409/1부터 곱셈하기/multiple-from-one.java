import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int num=1;
        for(int i=2; i<=10; i++) {
            num*=i;
            if(num>n) {
                System.out.println(i);
                break;
            }
        }
    }
}