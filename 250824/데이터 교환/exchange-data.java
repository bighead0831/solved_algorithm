public class Main {
    public static void main(String[] args) {
        int a=5, b=6, c=7;
        int tmpa=a;
        a=b;
        b=c;
        c=tmpa;
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}