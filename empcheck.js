const IS_PRESENT=1;
/**
 * empcheck will generate random values between 0 to 2;
 * Inside if condition it will check the value and print the line according to that.
 */
let empcheck=Math.floor(Math.random()*10)%2;
if(empcheck==IS_PRESENT){
    console.log("Employee is present");
}else{
    console.log("Employee is absent");
}