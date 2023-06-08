const kWeakestRows = (mat, k) => {
    const prepare = []
    const output = []
    for(let i = 0; i < mat.length; i++) {
        let count = 0
        for(let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                count++
            }
        }
        prepare.push([i, count])
    }
    prepare.sort(function(a,b) {return a[1]-b[1]})
    for (let a = 0; a < k; a++) {
        output.push(prepare[a][0])
    }
    return output
}
