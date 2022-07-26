#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <stack>
using namespace std;

int main()
{
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    stack<int> enqueue;
    stack<int> dequeue;
    int q = 0, queryType = 0, numberToEnqueue = 0;
    cin >> q;
    for (int i = 0; i < q; i++)
    {
        cin >> queryType;
        if (queryType == 1)
        {
            // we need to read x that we will push
            cin >> numberToEnqueue;
            // any enqueue operation will be in enqueue stack
            enqueue.push(numberToEnqueue);
        }
        else
        {
            // any pop or front operation
            // if dequeue not empty then pop from it
            // else we need to fill it again from enqueue stack
            if (dequeue.empty())
            {
                while (!enqueue.empty())
                {
                    dequeue.push(enqueue.top());
                    enqueue.pop();
                }
            }
            if (queryType == 2)
                dequeue.pop();
            else if (queryType == 3)
                cout << dequeue.top() << endl;
        }
    }
    return 0;
}