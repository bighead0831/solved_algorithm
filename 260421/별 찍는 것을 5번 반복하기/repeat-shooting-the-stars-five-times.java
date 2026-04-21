class PrintStar { // 클래스로 만들어봄
    void print() {
        for(int i=0; i<5; i++)
            System.out.println("**********");
    }
}

public class Main {
//     public static void printStar() {
//         for(int i=0; i<5; i++) {
//             System.out.println("**********");
//         }
//     }
    public static void main(String[] args) {
        PrintStar ps = new PrintStar();
        ps.print();
    }
}