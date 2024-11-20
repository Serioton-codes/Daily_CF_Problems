#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;
#define endl "\n"
int mod = 1e9 + 7;

ll help(ll s, ll e, ll target, char dir)
{
    if (s == e)
        return 0;

    ll mid = (s + e) / 2;
    if (dir == 'L')
    {
        if (target <= mid)
            return 1 + help(1, mid, target, 'R');
        else
            return 2 * mid + help(1, mid, target - mid, 'L');
    }
    else
    {
        if (target <= mid)
            return 2 * mid + help(1, mid, target, 'R');
        else
            return 1 + help(1, mid, target - mid, 'L');
    }
}
void solve()
{
    ll h, n;
    cin >> h >> n;
    cout << help(1, pow(2, h), n, 'L') << endl;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    solve();
}
