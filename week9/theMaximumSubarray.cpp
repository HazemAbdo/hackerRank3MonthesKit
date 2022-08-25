#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
vector<int> maxSubarray(vector<int> arr)
{
    //----------------------------SUB-ARRAY-------------------------------
    int maxSubArraySum = INT_MIN;
    int maxSubSequenceSum = 0;
    int maxNumber = INT_MIN;
    bool thereIsPositive = false;
    int len = arr.size();
    int **dp = new int *[len];
    for (int i = 0; i < len; i++)
    {
        dp[i] = new int[len];
    }
    for (int i = 0; i < len; i++)
    {
        for (int j = 0; j < len; j++)
        {
            dp[i][j] = 0;
        }
    }
    for (int i = 0; i < len; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            if (j == 0)
            {
                dp[i][j] = arr.at(i);
            }
            else
            {
                dp[i][j] = dp[i][j - 1] + dp[i - j][0];
            }
            if (maxSubArraySum < dp[i][j])
            {
                maxSubArraySum = dp[i][j];
            }
        }
    }

    //----------------------------SUB-SEQUENCE-------------------------------
    for (int i = 0; i < arr.size(); i++)
    {
        if (maxSubSequenceSum + arr.at(i) > maxSubSequenceSum)
        {
            maxSubSequenceSum += arr.at(i);
            thereIsPositive = true;
        }
        else if (maxNumber < arr.at(i))
        {
            maxNumber = arr.at(i);
        }
    }
    if (!thereIsPositive)
    {
        maxSubSequenceSum = maxNumber;
    }
    vector<int> res;
    res.push_back(maxSubArraySum);
    res.push_back(maxSubSequenceSum);
    return res;
}
int main()
{
    vector<int> arr = {-1, 2, 3, -4, 5, 10};
    vector<int> res = maxSubarray(arr);
    cout << res.at(0) << " " << res.at(1) << endl;
}