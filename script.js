console.log(33);
var weight=38;
// var price=38;
var year=1995;
var money=2005;
var age=12;
console.log(age);
var name="sadaruddin";
var address="Ändar killa bander ban";
var country="Bangladesh";
var isRich=true;
var passed=false;
console.log(passed);
console.log(typeof passed)
console.log(country);
var price=555;
console.log(typeof price);
//how to write variable name
var my_current_home_address="Uttara,Dhaka";//snake case
var myCurrentHomeAddress="Uttara,Dhaka";//camel case
var MyCurrentHomeAddress="Uttara,Dhaka";//Pascal case
var orangePrice=20;
var chocolate=0.5;
var applePrice=parseInt('26');
var applePrice=parseFloat('26.908');
console.log(typeof orangePrice);
console.log(typeof applePrice);
console.log(orangePrice + applePrice);
var first=0.1;
var second=0.2;
var total=first+second;
console.log(total.toFixed(3));
const num=-50/0;
console.log(num);
var price=35;
price+=35;
console.log(price);
var fridge=35000;
fridge=fridge-1000;
console.log(fridge);
var total_money=1000;
var total_price=700;
var remainder=total_money-total_price;
console.log("Remainder is ",remainder);
var math=75.25;
var bio=65;
var chemistry=80;
var physics=35.45;
var bangla=99.50;
var total=math+bio+chemistry+physics+bangla;
console.log(total);
var avg=(total/5).toFixed(3);

console.log("Average is ",avg);
var givenNumber=119;
var remainder=119%5;
console.log("Remainder is ",remainder);
const a=isNaN('11');
console.log(a);
const b=isNaN(2-10);
console.log(b);
var sunglass=80;
//number
var subject="EEE"
//boolean
var passed=true;
var lastExamScore=89;
// operation + - * \ %
// +=,-=,*=,/=
// comparison
// 1.bigger :>
// 2.less:<
//3.equal:===
//4.grater than or equal >=
//5.less than or equal <=
var weight=20;
if(weight<20){
    console.log("I will carry it myself");
}
else{
    console.log("i will rent a rickshaw")
}
const salary=25000;
const isBCS=true;
const height=61;

if(salary>20000 && height >66){
    console.log('supatro');
}
else{
    console.log("onno patro khuji");
}
if(salary>25000 || height>72 || isBCS==true){
console.log("eso baba kobul");
}
else{
    console.log("vaag tui moqbul");
}
const prise=500;
if(prise>=5000){
    const discount=prise*10/100;
    const payAmount=prise-discount;
    console.log(payAmount);
}
else if(price<5000){
    const discount=prise*5/100;
    const payAmount=prise-discount;
    console.log(payAmount);  
}
else{
    console.log(5000);
}
// const age=17;
// if(age<12){
//     console.log("you can eat for free");
// }
// else if(age>=60){
//     const discount=price*50/100;
//     const payAmount=price-discount;
//     console.log(payAmount);
// }
// else if(age>=40){

// }
// else{
//     console.log(price);
// }
const money1=0;
if(money1>300){
    console.log('bro you are rich');
}
else{
    if(money1>100){
        console.log('tui gorib o na borolok o na');
    }
    else{
        if(money1>0){
            console.log('dosto kola kha.calcium bara');
        }
        else{
            console.log('tui amer bondhu na');
        }
    }
}