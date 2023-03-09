function printAndSum (begin, end) {

    let total = 0;
    let buff = "";

    for(let i = begin; i <= end; i++){

        total += i;
        buff += "" + i + " ";
        
        
    }
    console.log(buff);
    console.log(`Sum: ${total}`)
    


}
printAndSum(5, 10)
printAndSum(0, 26)
