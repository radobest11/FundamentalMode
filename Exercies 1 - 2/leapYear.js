function leapYaer (year){

    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){

        console.log("yes");

    } else {

        console.log("no")
    }



}
leapYaer(1984)
leapYaer(2003)
leapYaer(4)
