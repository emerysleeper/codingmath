var digits = 10,
seed = 1234567890

console.log('Start')

function nextRand() {
    var n = (seed * seed).toString()
    while(n.length < digits * 2) {
        n = "0" + n

    }
    var start = Math.floor(digits/2),
    end = start+digits
    seed = parseInt(n.substring(start, end))
    return seed
}

function nextRandFloat() {
    return nextRand() / 9999
}

var results = []
for (var i = 0; i < 10000; i++) {
    var rand = nextRand()
    if(results[rand]) {
        break
    }
    results[rand] = true
}
console.log(i)