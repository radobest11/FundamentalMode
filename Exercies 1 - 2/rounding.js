function rounding(num, prec) {

    num = Number(num);
    prec = Number(prec);

    if (prec > 15) {

        prec = 15;
    }

    num = num.toFixed(prec)
    console.log(parseFloat(num))


}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3)
