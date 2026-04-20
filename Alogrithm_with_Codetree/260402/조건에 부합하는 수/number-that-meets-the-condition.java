import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int a = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();
        for(int i=1; i<=a; i++) {
            if(i%2==0 && i%4!=0) continue;
            if((i/8)%2==0) continue;
            if(i%7<4) continue;
            sb.append(i).append(" ");
        }

        System.out.println(sb);
    }
}