def fibonacciModified(t1, t2, n):
    current = 0
    prev = t2
    prevprev = t1
    for i in range(3, n + 1):
        current = prevprev + prev * prev
        prevprev = prev
        prev = current
    return current