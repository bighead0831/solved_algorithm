class Solution {
    public int[] solution(int[] array) {
        
        int maxNum = 0;
        int maxNum_index = 0;
    
        for(int i=0; i<array.length; i++) {
            if(maxNum<array[i]) {
                maxNum = array[i];
                maxNum_index = i;
            }
        }
        
        return new int[]{maxNum, maxNum_index};
    }
}