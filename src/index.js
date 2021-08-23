// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (matrix === undefined || matrix.length < 1) return [];

    let array = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            matrix[i].reverse();
        }

        for (let j = 0; j < matrix[i].length; j++) {
            array.push(matrix[i][j]);
        }
    }

    return array;
};
