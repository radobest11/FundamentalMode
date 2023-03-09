function triangleOfNumbers (num){

    

    for(let i = 1; i <= num; i++){

        let buff = "";

        for(let a = 1; a <= i; a++) {

            if(a > i) {

                i = a

            }

            buff += "" + i + " "

            
            
        }

        console.log(buff)
    }
}
//triangleOfNumbers(3)
triangleOfNumbers(5)
