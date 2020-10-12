class user {
    constructor(name, birthday, gender, location, email, password, uniqueUserID){ 
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
    this.location = location; 
    this.email = email;
    this.password = password;
    this.uniqueUserID = uniqueUserID;

    //opretter en funktion son genererer en USERID, som bliver nummereret ift. den rækkefølge brugerne opretter sig. 
    // funktion for prefference 
}
var generateUserID = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
})();

    //tilføjer en like funktion 
var like = function () {}

}

// tilføj metoder, herunder image 

class paymentUser extends user {
    constructor(name, birthday, gender, location, email, password) {
        super(name,birthday, gender, location, email, password);
         // add super like eller whoLiked me 
    }
}

class creditCard{
    constructor(cardholderName, expireDate, cardNumber, CVCNumber) {
        this.cardholderName = cardholderName;
        this.expireDate = expireDate;
        this.cardNumber = cardNumber;
        this.CVCNumber = CVCNumber;
    }
}

class freeUser extends user {
    constructor(name, birthday, gender, location, email, password) {
        super(name,birthday, gender, location, email, password);
    // tilføj evt en Likelimit som funktion 
    }
}

class interest extends user {
    constructor(name, ) {
        super(name);
    }
    //method som if A Likes B (forlænger likefunktionen fra user) --> Crud --> A likes A, B, C, D
}

class match extends interest {
    constructor(name){
        super(name);
    }
    // metode som sammenligner CRUD fra vores forskellige bruger og derved skabes matches 
    // tilføjer funktion sendMessage, da man efter et match får acces til at sende funktioner 
}# Godkendelses_3
