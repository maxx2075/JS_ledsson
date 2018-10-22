console.log("********************** Задание 1 **********************");
function div(val, by){
    return (val - val % by) / by;
}

let numbers = {
    hundreds: 0,
    decades: 0,
    units: 0    
};
let a = prompt("Введите чиcло",345);
if (a <= 999) {
    numbers.hundreds = div(a,100);
    numbers.decades = div(a % 100,10);
    numbers.units = a % 10;
    console.log("Число " + a + " преобразуется в объект:");
} else {
    console.log("Введите число от 1 до 999");
   }
console.log("Сотни: " + numbers.hundreds + ", Десятки: " + numbers.decades + ", Единицы: " + numbers.units);
console.log("********************** Задание 2 **********************");
let basket = [              
                {
                name: "spotlight",
                price: 572,
                power: 35,
                manufacturer: "China"
                },
                {
                name: "chair",
                price: 465,
                color: "white",
                manufacturer: "Austria"                        
                },
                {
                name: "lamp",
                price: 238,
                color: "black",
                power: 120,
                manufacturer: "Russia"                        
                },
                {
                name: "bowl",
                price: 119,
                color: "black",
                manufacturer: "Russia"                        
                }              
             ]
    //[23,34,56,364,754,345,745,75];
let basketname,summa = 0
console.log("Корзина: ");
for (let i=0; i < basket.length; i++) {
    basketname = ""; 
    summa += basket[i].price;
    for (prop in basket[i]) {
        basketname += prop + ":" + basket[i][prop] + " ";        
    }
console.log(basketname);    
} 
console.log("Стоимость корзины: " + summa);

//console.log("Стоимость корзины " + countBasketPrice(basket));

console.log("********************** Задание 3 **********************");
console.log("********************** Задание 4 **********************");