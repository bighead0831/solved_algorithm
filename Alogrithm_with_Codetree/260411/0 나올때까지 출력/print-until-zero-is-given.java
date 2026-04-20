import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        while(true) {
            int a = Integer.parseInt(br.readLine());
            if(a==0) break;
            System.out.println(a);
        }
    }
}