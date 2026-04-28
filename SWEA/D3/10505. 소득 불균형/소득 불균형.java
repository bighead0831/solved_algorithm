import java.util.Scanner;

class Solution
{
	public static void main(String args[]) throws Exception
	{
		Scanner sc = new Scanner(System.in);
		int T=sc.nextInt();
        
        int cntCase = 0;

		for(int test_case = 1; test_case <= T; test_case++)
		{
            int n = sc.nextInt();
            
            int sum = 0;
            int[] numArray = new int[n];
            for(int i=0; i<n; i++) {
                numArray[i] = sc.nextInt();
                sum += numArray[i];
            }
            int avg = sum/n;
            
            int cnt = 0;
            for(int i : numArray) {
                if(i<=avg) cnt++;
            }
            
            System.out.println(String.format("#%d %d", ++cntCase, cnt));
		}
	}
}