function login(input) {

    let index = 0;

    let username = input[index];
    index++;

    let tempUsername = username;
    tempUsername = tempUsername.split("");
    tempUsername = tempUsername.reverse();
    tempUsername = tempUsername.join("");

    let count = 0;
    

    for (let i = 1; i <= input.length; i++) {

        let tempPass = input[index];
        index++;     
        
        

        if (tempUsername !== tempPass) {

            count++;

            if (count === 4) {

                console.log(`User ${username} blocked!`);
                break;
            }

            console.log(`Incorrect password. Try again.`);

            

        } else {

            console.log(`User ${username} logged in.`);
            break;
        }
        
       
       
        
    }

    
}
//login(['Acer', 'login', 'go', 'let me in', 'recA']);
//login(['momo','omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])
