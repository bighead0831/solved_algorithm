import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        // HashMap을 이용하여 주머니 세팅 (1~n번 주머니)
        Map<Integer, Integer> bucket = new HashMap<>();
        for(int i=1; i<=n; i++)
            bucket.put(i, 0); // 1~n까지의 주머니 0으로 초기화

        for(int t=0; t<m; t++) { // m번 공 넣기
            String s = br.readLine();
            StringTokenizer a = new StringTokenizer(s);
            // i~j번째 주머니에 k번 공 넣기
            int i = Integer.parseInt(a.nextToken());
            int j = Integer.parseInt(a.nextToken());
            int k = Integer.parseInt(a.nextToken());
            // HashMap의 경우, put을 통해 Value 입력시 기존값에 덮어씌워짐
            for(int w=i; w<=j; w++)
                bucket.put(w, k);
        }

        // StringBuilder를 통해 HashMap에 있는 내용 String으로 만들기
        StringBuilder sb = new StringBuilder();
        for(int i=1; i<=n; i++)
            sb.append(bucket.get(i)+" ");
        
        System.out.print(sb+"\n");
    }
}