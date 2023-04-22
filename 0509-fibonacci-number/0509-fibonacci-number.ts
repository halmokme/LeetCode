function fib(n: number): number {
    let memo = [0, 1];
    for(let i=2; i<=n; i++) {
        memo[i] = memo[i-1] + memo[i-2];
    }
    return memo[n];
};