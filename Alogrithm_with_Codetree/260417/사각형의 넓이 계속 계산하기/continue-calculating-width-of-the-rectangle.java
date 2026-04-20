import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String chk = "";
        int n1 = 0;
        int n2 = 0;
        while(!chk.equals("C")) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            n1 = Integer.parseInt(st.nextToken());
            n2 = Integer.parseInt(st.nextToken());
            chk = st.nextToken();
            System.out.println(n1*n2);
        }
    }
}