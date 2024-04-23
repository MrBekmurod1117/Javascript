
//  const numberOfSeries=+prompt("nechta serial ko'rdiz:");

//  const seriasDB={
//     count:numberOfSeries,
//     series:{},
//     actors:{},
//     genres:[],
//     privet:false,
//  };
//  for(let i=0;i<2;i++){
//     a=prompt("oxirgi ko'rgan serializ:"),
//     b=prompt("nechi baho qo'yasiz:");
//     if(a!=null && b!=null && a!="" && b!=""){
//         seriasDB.series[a]=b;
//         console.log("done");
//     } else{
//         console.log("errror");
//         i--;
//     }  
//  }
//  if(seriasDB.count<5){
//     console.log("kam serila ko'ripsiz");
//  } else if(seriasDB.count>=5 && seriasDB.count<10 ){
//     console.log("siz classik tomoshabin ekANSIZ");
//  } else if(seriasDB.count>=10){
//     console.log("siz serialchi zvezda ekansiz");
//  } else{
//     console.log("error!");
//  }
//  console.log(seriasDB);
// const color=prompt("How are you want color:","")
// switch(color){
//     case "green":console.log("Oq yo'l:");break;
//     case "red":console.log("Sabr qiling!");break;
//     case "yellow":console.log("Shoshmasdan:");break;
//     default:console.log("insof sari harakatlaning!");break;
// }
// const age=+prompt("How old are you?");
// if(age>18){
//     console.log("18+");

// }
// else{
//     console.log("maylida");
// }
//let number=1;
// while (number<25) {
//     console.log(number);
//     number++;
    
// }
// do{
//     console.log(number);
//   number++; 
// }while (number<25)
// for(let i=0;i<=5;i++){
//     if(i===3){
//         ///break;
//         continue;
//     }
//     console.log(i);
// }
// function qosh(name,surname) {
//  console.log(`My name is ${name}  ${surname}`);
// }
// qosh("Ali" ,"Aliyev");
//  let logger=function () {
//     console.log("hello world:");
//  }
// logger();
// const number=(a,b)=> a+b;
// console.log(number(10,50));
// const user="Bekmurod";
// console.log(user[6]);
// console.log(user.toUpperCase());
// console.log(user.toLowerCase());
// console.log(user.indexOf("d"));
// console.log(user.slice(6));
// console.log(user.substring(0,5));
const number=10.9;
console.log(Math.round(number));
console.log(parseInt(number));
console.log(parseFloat(number));