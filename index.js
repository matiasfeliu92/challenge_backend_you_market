const detectMutation = (chain) => {
    // Create a square matrix, dividing the received chain based on the value of n(square root of chain length)
    const n = Math.sqrt(chain.length)
    let matrix = []
    for (let i = 0; i < n; i++) {
        matrix[i] = chain.substr(i*n, n).split('')
    }
    console.log(matrix)

    // Iterate the main diagonals of the matrix and check if there are mutations
    // If there are mutations, return true and if not return false
    for (let i = 0; i < n; i++) {
        let a = 0, c = 0, g = 0, u = 0
        for (let j = 0; j < n-i; j++) {
            switch (matrix[j][i+j]) {
                case 'A':
                    a++
                    break
                case 'C':
                    c++
                    break
                case 'G':
                    g++
                    break
                case 'U':
                    u++
                    break
            }
        }
        if((a % 2 === 0 && a > 0) || (c % 2 === 0 && c > 0) || (g % 2 === 0 && g > 0) || (u % 2 === 0 && u > 0)) {
            return true
        }
    }
    return false
}

const chain = 'AUGAUCUCG';
console.log(detectMutation(chain));