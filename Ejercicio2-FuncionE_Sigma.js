
//Ejercicio 2
//One hour

function calculateEcuation()
{
	var result = 0;
	var number = Math.pow(10,6);

	//console.log("Sigma ecuation");

    //sum up as sigma states Math.pow(10,6)
    for(var k = 1; k <= number; k++) 
    {
  		//append calculated result with the current one
    	result = result + Math.pow(-1, k + 1) / (2 * k - 1)    
    }

    return result * 4;

}

//console.log(calculateEcuation());