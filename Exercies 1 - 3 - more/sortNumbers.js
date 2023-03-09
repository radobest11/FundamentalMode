function sortNumbers(num1, num2, num3) {

    let numbers = [num1, num2, num3]

    console.log(numbers.sort((num1, num2) => num2 - num1).join("\n"))


    //numbers.sort(function(a, b) {return b - a});


    // for(i = 0; i <= numbers.length-1; i++) {

    //     console.log(numbers[i])


    // }

   


}
sortNumbers(0, 0, 5)