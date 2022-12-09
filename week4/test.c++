#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);

/*
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

int anagram(string s)
{

    int counter = 0;
    if (s.length() % 2 != 0)
    {
        return -1;
    }
    int half_len = s.length() / 2;
    string first = s.substr(0, half_len);
    string second = s.substr(half_len, half_len);
    vector<int> first_letters(26);
    vector<int> second_letters(26);
    for (int i = 0; i < half_len; i++)
    {
        first_letters[first[i] - 97]++;
    }
    for (int i = 0; i < half_len; i++)
    {
        second_letters[second[i] - 97]++;
    }
    for (int i = 0; i < 26; i++)
    {
        if (first_letters[i] > second_letters[i])
        {
            counter += first_letters[i] - second_letters[i];
        }
    }
    return counter;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string q_temp;
    getline(cin, q_temp);

    int q = stoi(ltrim(rtrim(q_temp)));

    for (int q_itr = 0; q_itr < q; q_itr++)
    {
        string s;
        getline(cin, s);

        int result = anagram(s);

        fout << result << "\n";
    }

    fout.close();

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
