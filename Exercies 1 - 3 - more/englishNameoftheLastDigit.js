function englishNameoftheLastDigit (num) {


    let tempNum = "" + num;
    let stringTempNum = tempNum
    let lastNumber = tempNum[tempNum.length - 1];


    if(lastNumber === "0") {

        console.log("zero");

    }else if(lastNumber === "1") {

        console.log("one");

    } else if (lastNumber === "2") {

        console.log("two");

    }else if(lastNumber === "3") {

        console.log("three");

    } else if (lastNumber === "4") {

        console.log("four");
        
    }else if(lastNumber === "5") {

        console.log("five");

    } else if (lastNumber === "6") {

        console.log("six");
        
    }else if(lastNumber === "7") {

        console.log("seven");

    } else if (lastNumber === "8") {

        console.log("eight");
        
    }else if (lastNumber === "9") {

        console.log("nine")
    }
}

englishNameoftheLastDigit(512);
englishNameoftheLastDigit(1)
englishNameoftheLastDigit(1643)
englishNameoftheLastDigit(511)
