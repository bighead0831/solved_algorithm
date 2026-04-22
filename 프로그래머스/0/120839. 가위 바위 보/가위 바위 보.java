import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public String solution(String rsp) {
        return Arrays.stream(rsp.split(""))
            .mapToInt(Integer::parseInt)
            .map(e -> e==2?0:(e==0?5:2))
            .mapToObj(String::valueOf)
            .collect(Collectors.joining());
    }
}