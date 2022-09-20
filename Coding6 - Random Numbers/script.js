var seed = 1,
a = 1103515245,
c = 12345,
m = Math.pow(2, 31)

function nextRand() {
    seed = (a * seed + c)% m;
    return seed
}

function nextRandFloat() {
    return nextRand() / m
}