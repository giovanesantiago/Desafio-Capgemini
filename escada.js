var n = 10 
for (var c = 1; c <= n; c++) {
    var space = ' '.repeat(n - c)
    var char = '*'.repeat(c)
    console.log(space + char)
}