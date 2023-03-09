function bitcoinMining(input) {

    let count = 0;

    let totalMoney = 0;

    let day = 0;
    let totalCount = 0;

    let dayFirst = 0;

    for (let i = 0; i < input.length; i++) {

        day++;


        let gramGold = Number(input[i]);

        if (day % 3 !== 0) {


            totalMoney += gramGold * 67.51


        } else {

            totalMoney += 0.7 * gramGold * 67.51

        }
        
        if(totalMoney >= 11949.16) {

            if (totalCount === 0) {

                dayFirst = day
            }
        }


        if (day % 3 === 0 && gramGold * 67.51 >= 11949.16) {

            count = Math.floor(totalMoney / 11949.16);

            totalMoney -= (count * 11949.16);

        } else {
    
            count = Math.floor(totalMoney / 11949.16);

            totalMoney -= (count * 11949.16);


        }

        totalCount += count;


    }



    console.log(`Bought bitcoins: ${totalCount}`);

    if (dayFirst !== 0) {

        console.log(`Day of the first purchased bitcoin: ${dayFirst}`);

    }


    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)


}
bitcoinMining([3124.15, 504.212, 2511.124])