
//Ejercicio 6
//One hour
function transposesOneMatrix(array) {
    var result = [];

//switch the indexes and reassign a new array.
    array.forEach(function (a, i) {
        a.forEach(function (b, j) {
            result[j] = result[j] || [];
            result[j][i] = b;
        });
    });
    return result;
}

var array = [[1, 5, 6], [2, 5, 3], [5, 3, 3]];
//console.log(transpose(array));
