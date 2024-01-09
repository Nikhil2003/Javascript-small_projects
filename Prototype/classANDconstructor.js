//Concept of call function.

// function setusername(username){
//     this.username = username;
//     console.log('called')

// }

// function createuser(username, email, password)
// {
//     setusername.call(username)
//     // this.username = username;
//     this.email = email;
//     this.password = password;
// }

// const details = new createuser("Nikhil ", "ns@gmail.com", 12345678)
// console.log(details);



                                             //CONCEPT OF CALSSES AND OBJECT.

// class User{
//     constructor(username,email,password){
//          this.username = username;
//          this.email = email;
//          this.password = password;
//     }

//     encryptPassword(){
//         this.password = `${this.password}ns`;
//     }
// }

// const address = new User("Nikhil","ns@gmail.com", 860);
// address.encryptPassword();
// console.log(address);


                                           //Behind the scene of the classes.


// function User (username, email, password){
//      this.username = username;
//      this.email = email;
//      this.password = password;
// }

// User.prototype.encryptPassword = function(){
//      return `${this.password}ns`;
// }

// const address = new User("nikhil", "ns860@google.com","456");
// console.log(address.encryptPassword)
 

