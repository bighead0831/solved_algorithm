import java.util.HashSet;

class Solution {
    public int solution(String[] s1, String[] s2) {
        HashSet <String> hs = new HashSet<>();
        int answer = 0;

        for(String s:s1) 
            hs.add(s);
        
        for(String ss:s2)
            if(hs.contains(ss)) 
                answer++;
        
        return answer;
    }
}