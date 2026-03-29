import java.io.*;


public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        
        StringBuilder sb = new StringBuilder();
        for(int i=1; i<=n; i++) {
            if(i%2==0 || i%5==0 || (i%3==0 && i%9!=0)) continue;
            sb.append(i).append(" ");
        }
        System.out.println(sb);
    }
}