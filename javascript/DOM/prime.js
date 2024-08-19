let primeNumbers = 0;

Outerloop: for (primeNumbers = 1; primeNumbers <= 100; primeNumbers++)
{
    for (let i = 2; i <= primeNumbers / 2; i++)
    {
        if (primeNumbers %i==0) {
            continue Outerloop;
        }
    }
    console.log(primeNumbers);
}
