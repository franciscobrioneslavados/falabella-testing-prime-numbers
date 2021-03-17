exports.primeNumbersRequest = (req, res, next) => {

    try {
        const numbers = Number(req.params.number);
        const listprimes = [];
        const arrayFunction = (new Array(numbers - 1).fill(1));
        const maxDiv = Math.floor(Math.sqrt(numbers));

        for (let i = 0; i <= maxDiv; i++) {
            if (arrayFunction[i - 2]) {
                for (let j = i; j <= Math.floor(numbers / i); j++) {
                    arrayFunction[(i * j) - 2] = 0;
                }
            }
        }
        arrayFunction.forEach((value, index) => {
            if (value) listprimes.push(index + 2);
        });
        res.json({
            prime_list: listprimes.reverse(),
        })
    } catch (e) {
        console.error(e);
        res.json({
            message: e.message
        })
    }

}