import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(int n) {
        List<Integer> list = new ArrayList<>();
        for(int i=1; i<=n; i++)
            if(n%i==0) list.add(i);
        
        int[] answer = new int[list.size()];
        int cnt = 0;
        for(int i : list) {
            answer[cnt] = i;
            cnt++;
        }
        return answer;
    }
}