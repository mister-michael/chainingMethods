const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort(function (a,b) {
    return b-a;}).splice(integer => integer >= 19).map(integer => integer * 1.5 -1))