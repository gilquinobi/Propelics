///Ejercicio 5
//one hour and a half
//i used brute force, i think this could be done better

    function matrixWithZeros()
        {
           var array1 = [1,2,4];
           var array2 = [4,0,6];
           var array3 = [7,6,9];
           var matrix = [array1, array2, array3];

           var arrayIndex = 0;
           var positionIndex = 0;

          //Finding index of matrix and array index within the matrix
          matrix.forEach(function(array, key)
          {
            for(var i = 0; i < array.length; i++)
          {
           	if(array[i] === 0)
            {
              arrayIndex = key
              positionIndex = i;
              //console.log(arrayIndex);
              //console.log(positionIndex);
           }
          }
          });
          
          //Fill the matrix with 0's
          matrix.forEach(function(array, key)
          {
            //First find the array to fill the column
            if(key == arrayIndex)
            {
              for(var i = 0; i < array.length; i++)
              {
                array[i] = 0;
              }
            }
            //Then the rows
            array.forEach(function(value, key)
            {
              if(key == positionIndex)
              {
                array[key] = 0;
              }
            });
            
          });
          
return matrix;
}