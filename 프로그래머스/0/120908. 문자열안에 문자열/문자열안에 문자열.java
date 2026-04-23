import java.util.HashSet;

class Solution {
    public int solution(String str1, String str2) {
        HashSet <String> hashSet = new HashSet<>();
        
        int length = str2.length();
        
        if(str1.length()<length) return 2; // str2가 str1보다 길때는 무조건 2 반환
        else if(str1.length()==length) return str1.equals(str2)?1:2; // str1과 str2 길이가 같을때
        
        String[] s1 = str1.split("");
        for(int i=0; i<=s1.length-length; i++) {
            String chkS = "";
            
            int cnt = 0;
            while(cnt<length) {
                chkS += s1[i + cnt++];
            }
            hashSet.add(chkS);
        }
        return hashSet.contains(str2)?1:2;
    }
}