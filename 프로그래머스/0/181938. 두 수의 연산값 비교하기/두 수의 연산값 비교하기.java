class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        String plus = "";
        plus += a;
        plus += b;
        int pResult = Integer.parseInt(plus);
        if(pResult>2*a*b)
            answer = pResult;
        else
            answer = 2*a*b;
        return answer;
    }
}