const checkMutation = (chain) => {
    // Create a square matrix, dividing the received chain based on the value of n(square root of chain length)
    const n = Math.sqrt(chain.length)
    let matrix = []
    for (let i = 0; i < n; i++) {
        matrix[i] = chain.substr(i*n, n).split('')
    }
    console.log(matrix)

    // Iterate the main diagonals of the matrix and check if the sum of a nucleotide is even or not
    // If the sum of a nucleotide is even, there is a mutation and return true, if not even, there is not mutation and return false
    for (let i = 0; i < n; i++) {
        let a = 0, c = 0, g = 0, u = 0
        for (let j = 0; j < n-i; j++) {
            if (matrix[i+j][j] === "A") a++;
            if (matrix[i+j][j] === "C") c++;
            if (matrix[i+j][j] === "G") g++;
            if (matrix[i+j][j] === "U") u++;
        }
        if((a % 2 === 0 && a > 0) || (c % 2 === 0 && c > 0) || (g % 2 === 0 && g > 0) || (u % 2 === 0 && u > 0)) {
            return true
        }
    }
    return false
}

module.exports = checkMutation