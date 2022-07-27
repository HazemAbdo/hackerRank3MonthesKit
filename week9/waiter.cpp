#include <bits/stdc++.h>
using namespace std;

#define MAX_SIZE 1000005
vector<int> findPrimes()
{
    vector<int> primes;
    bool IsPrime[MAX_SIZE];
    memset(IsPrime, true, sizeof(IsPrime));
    // no need to start from 0 or 1-->not primes
    for (int i = 2; i * i < MAX_SIZE; i++)
    {
        if (IsPrime[i] == true)
        {
            // if i is primes then all of its factors are not
            // no need to start from 2i but it is more
            // optimized to start from i*i as below that have been checked by other numbers
            for (int j = i * i; j < MAX_SIZE; j += i)
            {
                IsPrime[j] = false;
            }
        }
    }
    for (int p = 2; p < MAX_SIZE; p++)
    {
        if (IsPrime[p])
        {
            primes.push_back(p);
        }
    }
    return primes;
}
vector<int> waiter(vector<int> number, int q)
{
    vector<int> primes = findPrimes();
    stack<int> temp, A, B;
    vector<int> result;
    for (int i = 0; i < number.size(); i++)
        temp.push(number[i]);
    for (int i = 0; i < q; i++)
    {
        while (!temp.empty())
        {
            if (temp.top() % primes[i] == 0)
            {
                B.push(temp.top());
            }
            else
            {
                A.push(temp.top());
            }
            temp.pop();
        }
        while (!B.empty())
        {
            result.push_back(B.top());
            B.pop();
        }
        temp = A;
        while (A.empty() != true)
        {
            A.pop();
        }
    }
    while (!temp.empty())
    {
        result.push_back(temp.top());
        temp.pop();
    }
    return result;
}
int main()
{
    vector<int> number = {3, 4, 7, 6, 5};
    vector<int> B = waiter(number, 3);
    for (int i = 0; i < B.size(); i++)
    {
        cout << B.at(i) << " ";
    }
    return 0;
}
