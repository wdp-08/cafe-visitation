function resto(name,age,money) {
    if (name == null ) {
        console.log("Anda tidak boleh masuk");
    }
    else{
        if (age < 17) {
            console.log("Anda hanya bisa memesan juice");
            if (money >= 50000  ) {
                console.log("Anda bisa pesan minuman, sisa uang anda : " + (money - 50000));
            } else {
                console.log("Uang tidak cukup anda harus pulang!");
            }
        } else {
            console.log("Anda hanya bisa memesan anggur");
            if (money >= 300000 ) {
                console.log("Anda bisa pesan minuman, sisa uang anda : " + (money - 300000));
            } else {
                console.log("Uang tidak cukup anda harus pulang!");
            }
        }
        
    }
}
resto(name = "Sindi Oktafianti", age = "16", money = "500000");