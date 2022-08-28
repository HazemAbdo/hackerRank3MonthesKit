import java.io.*;
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        // read using java.io.Scanner
        Scanner sc = new Scanner(System.in);
        int q = sc.nextInt();
        TreeSet<Integer> ts = new TreeSet<Integer>();
        for (int i = 0; i < q; i++) {
            // there is two integers in each line
            int a = sc.nextInt();
            if (a == 1) {
                int b = sc.nextInt();
                ts.add(b);
            } else if (a == 2) {
                int b = sc.nextInt();
                ts.remove(b);
            } else {
                System.out.println(ts.first());
            }
        }
    }
}