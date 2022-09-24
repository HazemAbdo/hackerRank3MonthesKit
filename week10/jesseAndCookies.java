import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {
    public static int cookies(int k, List<Integer> A) {
        PriorityQueue<Integer> ts = new PriorityQueue<Integer>();
        for (int i = 0; i < A.size(); i++) {
            ts.add(A.get(i));
        }
        int counter = 0;
        while (ts.peek() < k && ts.size() > 1) {
            int newSmallest = ts.poll() + 2 * ts.poll();
            ts.add(newSmallest);
            counter++;
        }
        if (ts.peek() < k) {
            return -1;
        } else {
            return counter;
        }
    }

}
