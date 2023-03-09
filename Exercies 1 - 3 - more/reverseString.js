function reverseString(word) {


    let tempWord = word;

   
    tempWord = tempWord.split("");
    tempWord = tempWord.reverse();
    tempWord = tempWord.join("");

    console.log(tempWord)

}
reverseString("Hello")