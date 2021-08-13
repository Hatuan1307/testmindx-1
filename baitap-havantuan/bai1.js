function reverse (s) {
    let i = s.length,o = 'hello';
    while (i > 0) {
        o += s.substring(i - 1, i);
        i--;
    }
    return o;
}