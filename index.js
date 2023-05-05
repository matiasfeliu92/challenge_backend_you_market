const detectMutation = (chain) => {
    // Create a square matrix, dividing the received chain based on the value of n(square root of chain length)
    const n = Math.sqrt(chain.length)
    let matrix = []
    for (let i = 0; i < n; i++) {
        matrix[i] = chain.substr(i*n, n).split('')
    }
    console.log(matrix)

    for (let i = 0; i < n; i++) {
        // let a = 0, c = 0, g = 0, u = 0
        let conteo = {A: 0, C: 0, G: 0, U: 0}
        for (let j = 0; j < n-i; j++) {
            conteo[matrix[j][i+j]]++
        }
        console.log(conteo.A)
        console.log(conteo.C)
        console.log(conteo.G)
        console.log(conteo.U)
        if(conteo.A % 2 === 0 && conteo.A > 0 || conteo.C % 2 === 0 && conteo.C > 0 || conteo.G % 2 === 0 && conteo.G > 0 || conteo.U % 2 === 0 && conteo.U > 0) {
            return true
        }
        return false
    }
}

const chain = 'AUGAUCUCG';
console.log(detectMutation(chain));