#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);

/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

void separateNumbers(string s)
{
    if (s.size() < 2)
    {

        std::cout << "NO" << std::endl;
        return;
    }
    vector<int> current;
    bool found_beautiful = true;
    // I will try all options from 1 to len(s)/2
    for (int i = 1; i <= s.size() / 2; i++)
    {
        for (int j = 0; j < i; j++)
        {
            current.push_back(stoi(s.substr(j, j + i)));
        }
        for (auto it = current.begin(); it != current.end(); i++)
        {
            auto next = it + 1;
            if (*next - *it != 1)
            {
                found_beautiful = false;
            }
        }
        if (found_beautiful)
        {
            std::cout << "YES" << std::endl;
            return;
        }
    }
}

int main()
{
    string q_temp;
    getline(cin, q_temp);

    int q = stoi(ltrim(rtrim(q_temp)));

    for (int q_itr = 0; q_itr < q; q_itr++)
    {
        string s;
        getline(cin, s);

        separateNumbers(s);
    }

    return 0;
}

string ltrim(const string &str)
{
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace))));

    return s;
}

string rtrim(const string &str)
{
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end());

    return s;
}
