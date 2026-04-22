import java.util.stream.IntStream;

class Solution {
    public int solution(int n) {
        return IntStream.rangeClosed(1, n).filter(e -> e%2==0).sum();
    }
}

// 스트림 활용하여 해결
// IntStream : rangeClosed()를 활용하고 인자값들을 int형으로 받기 위해 사용
// rangeClosed(1, n) : 1~n까지의 숫자를 순서대로 인자로 받음
// filter(e -> e%2==0) : 각 인자값 중 짝수만 통과
// sum() : 통과한 인자들 모두 더하기