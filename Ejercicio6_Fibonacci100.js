//Ejercicio 6
// half an hour

function calculateFibonacci()
{
    var a = 0;
    var b = 1;
    var temp = 0;
    var counter = 0;
	
	//console.log("First 100 Fibonacci numbers");

	while (counter!=100)
		{
			c = a + b;
			a = b;
			b = c;
			counter++;

			console.log(c);
		}
}