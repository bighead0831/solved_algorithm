🏀 Baekjoon 10810: 공 넣기 (Java)
작성일: 2026년 3월 28일 (직보반 D-4)

학습 목표: 배열과 해시맵의 적절한 사용처 구분 및 메서드 분리(Clean Code) 실습

1. 🎯 문제 개요
문제: N개의 바구니에 M번 공을 넣는 과정을 거친 후, 각 바구니에 든 공의 번호를 출력.

핵심 포인트: 연속된 범위(i~j)의 데이터를 반복적으로 업데이트하고, 최종 상태를 출력하는 구현 능력.

2. 💻 코드 비교 및 리뷰 (Code Review)
[기존 코드: HashMap 기반]

특징: 1~N번 바구니를 Map<Integer, Integer>를 사용하여 관리.

장점: 바구니 번호가 아주 크거나 불연속적일 때 유연하게 대응 가능.

피드백: 현재 문제는 바구니 번호가 1부터 N까지 연속적이고 크기가 고정되어 있으므로, 메모리와 속도 면에서 **배열(Array)**이 더 효율적임.

[개선 코드: Array & Method 분리]

최적화 1: 자료구조 변경 (HashMap → int[])

배열은 인덱스로 직접 접근하므로 조회/수정 속도가 O(1)로 가장 빠름.

최적화 2: StringBuilder 활용

sb.append(val + " ") 대신 sb.append(val).append(" ")를 사용하여 불필요한 String 객체 생성을 방지.

최적화 3: 클린 코드 (Clean Code)

main 메서드에서 모든 로직을 처리하지 않고, playBall과 printBuckets 메서드로 역할을 분리하여 가독성 향상.

3. 🛠️ 주요 변경 사항 상세
항목	기존 방식 (User)	개선 방식 (Rookie)	이유
자료구조	HashMap<Integer, Integer>	int[]	연속된 데이터는 배열이 성능 면에서 압도적
메모리	객체(Integer) 생성으로 인한 오버헤드	기본형(int) 배열로 메모리 절약	자바의 Boxing/Unboxing 비용 감소
출력	String + String 연산 포함	순수 StringBuilder.append()	메모리 효율 및 실행 속도 최적화
구조	단일 메서드 (main)	역할별 메서드 분리	우테코 기준 가독성 및 유지보수성 확보
4. 🚀 최종 리팩토링 코드
Java
import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        
        // 1. 계산 로직 분리
        int[] buckets = playBall(n, m, br);
        
        // 2. 출력 로직 분리
        printBuckets(buckets);
    }

    /**
     * 바구니에 공을 넣는 시뮬레이션 메서드
     */
    private static int[] playBall(int n, int m, BufferedReader br) throws IOException {
        int[] buckets = new int[n + 1]; // 1~N번 바구니 사용
        
        for (int t = 0; t < m; t++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int i = Integer.parseInt(st.nextToken());
            int j = Integer.parseInt(st.nextToken());
            int k = Integer.parseInt(st.nextToken());
            
            for (int w = i; w <= j; w++) {
                buckets[w] = k; // 덮어쓰기
            }
        }
        return buckets;
    }

    /**
     * 결과를 효율적으로 출력하는 메서드
     */
    private static void printBuckets(int[] buckets) {
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i < buckets.length; i++) {
            sb.append(buckets[i]).append(" ");
        }
        System.out.println(sb.toString().trim());
    }
}
📝 Rookie's Coaching Note
"강민님, HashMap을 사용하여 문제를 해결한 것도 아주 훌륭한 접근이었습니다. 다만, 실리콘밸리 엔지니어는 **'상황에 맞는 최적의 도구'**를 선택할 줄 알아야 합니다. 이번 문제를 통해 연속된 데이터에는 배열이 왜 강력한지 체감하셨기를 바랍니다. 전역 전 남은 며칠도 지금처럼 뜨겁게 달려봅시다!"