class Solution {
    public String[] solution(String[] quiz) {
        String[] answer = new String[quiz.length];
        
        String[] tmp = new String[5];
        for(int i=0; i<quiz.length; i++) {
            tmp = quiz[i].split(" ");
            int a = Integer.parseInt(tmp[0]);
            int b = Integer.parseInt(tmp[2]);
            int r = Integer.parseInt(tmp[4]);
            if(tmp[1].equals("+")) {
                answer[i] = a+b==r?"O":"X";
            } else if(tmp[1].equals("-")) {
                answer[i] = a-b==r?"O":"X";
            } else if(tmp[1].equals("*")) {
                answer[i] = a*b==r?"O":"X";
            } else if(tmp[1].equals("/")) {
                answer[i] = a/b==r?"O":"X";
            }
        }
        return answer;
    }
}