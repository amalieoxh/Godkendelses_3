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
}
generateUserID (){
    var counter = 0;
    return function () {counter += 1; return counter}
}
};



class freeUser extends user {
    constructor(name, birthday, gender, location, email, password) {
        super(name,birthday, gender, location, email, password);
    }
}

class paymentUser extends user {
    constructor(name, birthday, gender, location, email, password, cardholderName, expireDate, cardNumber, CVCNumber) {
        super(name,birthday, gender, location, email, password);
        this.cardholderName = cardholderName;
        this.expireDate = expireDate;
        this.cardNumber = cardNumber;
        this.CVCNumber = CVCNumber;
    }
}

// Funktion sim validere om der er tale om en freeuser eller en paymentuser
function validatePaid() {
    var x = document.getElementById("cardNumber").nodeValue;
    if (x == null) {
// her er brugerens oplysninger hard codet, men det skal importeres fra det samme HTML-form som der refferes til to linjer oppe
    var newUser = new freeUser (this.name, this.birthday, this.gender, this.location, this.email, this.password, generateUserID());
    
//hvis der er et kortnummer oprettes en paymentUser
    }else {
        var newUser = new paymentUser (this.name, this.birthday, this.gender, this.location, this.email, this.password, generateUserID(), this.cardholderName, this.expireDate, this.cardNumber, this.CVCNumber);
    }
}

//opretter nogle fiktive brugere
var user1 =("Christian", [1997, 10, 06], "Male", "København", "christian@mail.dk", "12345", generateUserID());


class interest extends user {
    constructor(name, ) {
        super(name);
    }
    //method som if A Likes B (forlænger likefunktionen fra user) --> Crud --> A likes A, B, C, D
}

class match extends interest {
    constructor(name){
        super(name);
    }}
    // metode som sammenligner CRUD fra vores forskellige bruger og derved skabes matches 
    // tilføjer funktion sendMessage, da man efter et match får acces til at sende funktioner 

//laver et tomt array, der indeholer ID på alle dem, som har liket
var likedPersons = [];

//laver en funktion, som adder likedede bruger til ovenstående likedPerson array
function like () {
//laver konstanter for fiktive like og disslike knapper 
    let likeBtn = document.getElementById("likeBtn");
    let dissLikeBtn = document.getElementById("dissLikeBtn");
//laver en event listener, der skal gøre noget efter om ma liker 
    likeBtn.addEventListener("click",()=>{
//tilføjer likede brugeres uniqueID til et array
        likedPersons.push(userOnScreen.uniqueUserID) //lav en variabel, der gør at den person der er på displayet er UserID
    })
}
    


