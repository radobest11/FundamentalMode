function vacation(groupPeople, typeGroup, dayWeek) {


    let priceStudentsFriday = 8.45;
    let priceStudentsSaturday = 9.8;
    let priceStudentsSunday = 10.46;
    let priceBusinessFriday = 10.9;
    let priceBusinessSaturday = 15.6;
    let priceBusinessSunday = 16;
    let priceRegularFriday = 15;
    let priceRegulatSaturday = 20;
    let priceRegularSunday = 22.5;

    let studentsDiscount = 15;
    let regularDiscount = 5;
    let businessDiscount = 10;

    if (typeGroup === "Business" && groupPeople >= 100) {

        groupPeople = groupPeople - businessDiscount;
    }



    let totalPrice = 0;



    if (dayWeek === "Friday" && typeGroup === "Students") {

        totalPrice = priceStudentsFriday * groupPeople;

    } else if (dayWeek === "Saturday" && typeGroup === "Students") {

        totalPrice = priceStudentsSaturday * groupPeople;

    } else if (dayWeek === "Sunday" && typeGroup === "Students") {

        totalPrice = priceStudentsSunday * groupPeople;
    }
    if (dayWeek === "Friday" && typeGroup === "Regular") {

        totalPrice = priceRegularFriday * groupPeople;

    } else if (dayWeek === "Saturday" && typeGroup === "Regular") {

        totalPrice = priceRegulatSaturday * groupPeople;

    } else if (dayWeek === "Sunday" && typeGroup === "Regular") {

        totalPrice = priceRegularSunday * groupPeople;
    }
    
    if (dayWeek === "Friday" && typeGroup === "Business") {

        totalPrice = priceBusinessFriday * groupPeople;

    } else if (dayWeek === "Saturday" && typeGroup === "Business") {

        totalPrice = priceBusinessSaturday * groupPeople;

    } else if (dayWeek === "Sunday" && typeGroup === "Business") {

        totalPrice = priceBusinessSunday * groupPeople;
    }

    
    if (typeGroup === "Students" && groupPeople >= 30) {


        totalPrice = totalPrice - (studentsDiscount * totalPrice) / 100;
    }

    if (typeGroup === "Regular" && groupPeople >= 10 && groupPeople <= 20) {

        totalPrice = totalPrice - (regularDiscount * totalPrice) / 100;
    }


    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(30, "Students","Sunday");
vacation (40,"Regular","Saturday");
vacation(100, "Business", "Friday")
    