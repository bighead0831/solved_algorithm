import java.util.ArrayList;

class Solution {
    public int[] solution(int n, int[] numlist) {       
        ArrayList <Integer> arrL = new ArrayList<>();
        for(int i:numlist) {
            if(i%n==0)
                arrL.add(i);
        }
        
        int[] answer = new int[arrL.size()];
        for(int i=0; i<arrL.size(); i++) {
            answer[i] = arrL.get(i);
        }
        
        return answer;
    }
}