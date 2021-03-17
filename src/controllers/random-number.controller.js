exports.randomNumber = (req, res, next) => {

    try {
        let interval = 2;
        let num = Number(req.params.number);
        const listPimeNumbers = [];
        
        for(; interval < num; interval ++ ){
            if(primeNumbers(interval)) {
                listPimeNumbers.push(interval);
            }
        }
        res.status(200).json({
            result: listPimeNumbers.reverse(),
        })
    }catch(e) {
        console.error(e);
    }
    
}

function primeNumbers(num) {
    for (var i = 2; i < num; i ++){
        if (num % i === 0){ 
            return false
        }
    }
    return num !== 1;

}