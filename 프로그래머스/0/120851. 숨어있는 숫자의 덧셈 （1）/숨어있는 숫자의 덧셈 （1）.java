import java.util.Arrays;

class Solution {
    public int solution(String my_string) {
        int answer = 0;
        return Arrays.stream(my_string.split(""))
            .filter(e -> e.equals("1")||e.equals("2")||e.equals("3")||e.equals("4")||e.equals("5")||e.equals("6")||e.equals("7")||e.equals("8")||e.equals("9"))
            .mapToInt(Integer::parseInt)
            .sum();
    }
}