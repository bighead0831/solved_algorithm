public class Main {
    public static void main(String[] args) {
        int a=5, b=6, c=7;
        int tmpb=b, tmpc=c;
        b=a;
        c=tmpb;
        a=tmpc;
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}