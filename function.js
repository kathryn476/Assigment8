function myName(){
    console.log("kathryn")
}

myName();
function myNameDynamics(name,age){
    console.log( name,age )
}
myNameDynamics("Mugwanya", "27years")
myNameDynamics("Namara" , "25years")
myNameDynamics("Agaba", "16years")
myNameDynamics("Lukwago", "42years")
myNameDynamics("Ssenabulya" ,"23years")

function calculateProfits(Assets){
    let liabilites = 5000000
    Profits = liabilites - Assets;
    return Profits

}
   function displayProits() {
       let Profits = calculateProfits(1800000);
       message = "my profits is "+Profits
       console.log(message)
   }
   displayProits();

let showText = message => console.log(message)
showText('helo,kathryn!');
let add = (ab,xy) => {
    return ab+xy
}
console.log(add(47,76));

let num_1 =19;
for (let num=1; num<=num_1;num++){
    console.log("I love Uganda.", num)
}