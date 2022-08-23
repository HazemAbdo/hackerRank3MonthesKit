#include <iostream>
#include <vector>
using namespace std;
long long getWays(int n, vector<long> c)
{
  long long res = 0;
  int len = c.size();
  long long **dp = new long long *[len];
  for (int i = 0; i < len; i++)
  {
    dp[i] = new long long[n + 1];
  }
  for (int i = 0; i < len; i++)
  {
    for (int j = 0; j <= n; j++)
    {
      dp[i][j] = 0;
    }
  }
  long long above = 0;
  for (int i = 0; i < len; i++)
  {
    for (int j = 0; j <= n; j++)
    {
      if (i >= 1)
      {
        above = dp[i - 1][j];
      }
      if (j == 0)
      {
        dp[i][j] = 1;
      }
      // if current coin > current amount then it can't participate in its sum then only take the value of the above cell(previous coin)
      else if (c.at(i) > j)
      {
        dp[i][j] = above;
      }
      else
      {
        dp[i][j] = above + dp[i][j - c.at(i)];
      }
    }
  }
  for (int i = 0; i < len; i++)
  {
    for (int j = 0; j <= n; j++)
    {
      cout << dp[i][j] << " " << i << " " << j << endl;
    }
  }
  cout << len - 1 << " " << n << endl;
  return dp[len - 1][n];
}
int main()
{
  vector<long> c = {41, 34, 46, 9, 37, 32, 42, 21, 7, 13, 1, 24, 3, 43, 2, 23, 8, 45, 19, 30, 29, 18, 35, 11};
  long long res = getWays(250, c);
  cout << res << endl;
  return 0;
}