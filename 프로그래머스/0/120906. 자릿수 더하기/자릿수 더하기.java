import java.util.Arrays;

class Solution {
    public int solution(int n) {
        String[] s = Integer.toString(n).split("");
        int[] num = new int[s.length];
        for(int i=0; i<num.length; i++) {
            num[i] = Integer.parseInt(s[i]);
        }
        int sum = 0;
        for(int i=0; i<num.length; i++) {
            sum += num[i];
        }
        
        return sum;
    }
}