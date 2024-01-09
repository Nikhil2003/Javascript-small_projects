class User1
{
    constructor (username)
    {
        this.username = username;

    }

    logMe()
    {
        console.log(`username is ${this.username}`);
    }
    
    static id(){
        return `123`
    }
}

class User2 extends User1
{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const details = new User2 ("Nikhil","ns@gmail.com","123")
details.addCourse();

const details1 = new User1("Nikhil seth")
details1.logMe();

// console.log(details instanceof User2);
console.log(details1 instanceof User2)