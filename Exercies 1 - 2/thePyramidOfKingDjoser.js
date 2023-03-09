function thePyramidOfKingDjoser(base, increment) {

    let marble = 0;
    
    let lapisLazuli = 0;
    let gold = 0;
    
    let step = 0;


    if (base && increment > 0){

        let stone = 0;
        let height = 1;

        for(let i = base; i >= 1; i -= 2) {


            if(base > 2) {

                if ( height  % 5 === 0) {

                    lapisLazuli += ( base * 4 - 4 )* increment;

                } else {

                    marble += (base * 4 - 4) * increment;

                }
                height++;

                stone += (base - 2) * (base - 2) * increment;

            }else {

                gold += (base * base) * increment;
            }
            base -= 2;
        }  
        
        
        console.log(`Stone required: ${Math.ceil(stone)}\nMarble required: ${Math.ceil(marble)}\nLapis Lazuli required: ${Math.ceil(lapisLazuli)}\nGold required: ${Math.ceil(gold)}\nFinal pyramid height: ${Math.floor(height * increment)}`)
    }




}
thePyramidOfKingDjoser(11, 0.75)