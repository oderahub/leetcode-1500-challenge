// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row - traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Example 1:


Input: matrix = [[1, 2], [3, 4]], r = 1, c = 4
Output: [[1, 2, 3, 4]]
// Example 2:


Input: matrix = [[1, 2], [3, 4]], r = 2, c = 4
Output: [[1, 2], [3, 4]]


Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
//     - 1000 <= mat[i][j] <= 1000
// 1 <= r, c <= 300


// Solution

var matrixReshape = (matrix, r, c) => {

    let m = matrix.length;
    let n = matrix[0].length;

    if (m * n !== r * c)
        return matrix;

    let flat = matrix.flat()

    let reshaped = []

    for (let i = 0; i < r; i++) {
        reshaped.push(flat.slice(i * c, (i + 1) * c))
    }
    return reshaped
}

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4));  // Output: [[1, 2, 3, 4]]
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));