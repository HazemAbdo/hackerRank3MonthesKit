#include <bits/stdc++.h>

using namespace std;

int getTotalX(vector<int> a, vector<int> b)
{
    set<int> allPoss;
    set<int> res;
    for (int i = 1; i <= 100; i++)
    {
        if (i % a[0] == 0)
        {
            allPoss.insert(i);
        }
    }
    res= allPoss;
    for (auto x : allPoss)
    {
        for (int i = 1; i < a.size(); i++)
        {
            if (x % a[i] != 0)
            {
               res.erase(x);
            }
        }
    }

    for (auto x : allPoss)
    {
        for (int i = 0; i < b.size(); i++)
        {
            if (b[i] % x != 0)
            {
                res.erase(x);
            }
        }
    }
    return res.size();
}

int main()
{
    vector<int> a = {2, 4};
    vector<int> b = {16, 32, 96};
    cout << getTotalX(a, b) << endl;
}
