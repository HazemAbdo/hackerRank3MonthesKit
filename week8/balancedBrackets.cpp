#include <bits/stdc++.h>
#include <stack>
using namespace std;
int isOpen(char c)
{
    if (c == '(')
        return 1;
    else if (c == '[')
        return 2;
    else if (c == '{')
        return 3;
    else
        return -1;
}
int isClose(char c)
{
    if (c == ')')
        return 1;
    else if (c == ']')
        return 2;
    else if (c == '}')
        return 3;
    else
        return 0;
}

string isBalanced(string s)
{
    stack<char> stack;
    char stackTop;
    char currentChar;
    for (int i = 0; i < s.size(); i++)
    {
        if (!stack.empty())
            stackTop = stack.top();
        currentChar = s[i];
        if (isOpen(stackTop) == isClose(currentChar))
        {
            if (!stack.empty())
                stack.pop();
        }
        else if (isClose(currentChar) != 0 || isOpen(currentChar) != -1)
        {
            stack.push(currentChar);
        }
    }
    if (stack.empty())
        return "YES";
    else
        return "NO";
}

int main()
{
    string s;
    cin >> s;
    cout << isBalanced(s) << endl;
}
