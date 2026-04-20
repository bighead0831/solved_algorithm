import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int evenCnt = 3;
        while(evenCnt>0) {
            int n = Integer.parseInt(br.readLine());
            if(n%2 != 0)
                continue;
            else {
                System.out.println(n/2);
                evenCnt--;
            }
        }
    }
}