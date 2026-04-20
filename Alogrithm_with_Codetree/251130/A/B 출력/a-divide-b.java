import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        String s = ""; // 문자열 s 선언
        // <문자열을 사용하는 이유>
        // int의 범위는 32비트이므로 이보다 큰 수는 '정수 오버플로우'가 발생한다.
        // 2.1*10^9 이상의 값은 한 바퀴 돌아서 전혀 다른 수(양수->큰 음수)로 튀어버림.
        // [참고] 그러므로 자료형은 int 대신 최소 long을 쓰는 게 안전하다.
        // 여하튼, 소수점 21번째 자리에서 내림하기 위해 나누거나 곱하다보면 자료형 범위를 넘으므로
        // 반복문 각 회차마다 문자열 뒤에 붙여버리면 해결된다. (내 생각)
        for(int i=0; i<21; i++) {
            String tempS = String.valueOf(a/b); // a를 b로 나누었을 때의 몫을 문자열로 저장 (사유: 위에 기술))
            s += tempS; // 결과로 출력할 문자열 뒤에 붙이기
            if(i==0) s += "."; // 처음에 몫을 구하고 이후 부터는 소수점 아래이므로 소수점 붙여주기
            a=(a%b)*10; // a를 b로 나누었을 때의 나머지를 계속 계산하기
        }

        System.out.println(s); // 문자열 결과 출력
    }
}