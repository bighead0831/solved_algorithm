import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        String input = br.readLine();
        while(true) {
            int n = Integer.parseInt(input);
            if(n>25) sb.append("Lower\n");
            else if(n<25) sb.append("Higher\n");
            else { sb.append("Good\n"); break; }
            input = br.readLine();
        }
        System.out.println(sb.toString());
    }
}