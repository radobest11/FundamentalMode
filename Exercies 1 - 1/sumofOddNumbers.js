function sumofOddNumbers (num) {

    let count = 0;

    let sum = 0;

    for(let i = 1; i <= 100; i++) {

        if(i % 2 !== 0) {

            count++;

            console.log(i);

            sum += i

        }

        if(count >= num) {

            break;
        }


        
    }

    console.log(`Sum: ${sum}`)
}
sumofOddNumbers(5)