// **** Задание 1 ****
console.log("**** Задание 1 ****");
let i = 2, j, flag; 
while (i <= 100) {
    j = 2;
    flag = true;
    while (j < i) {
        if (i % j == 0) {
            flag = false;
            break;        
            }
        j++;
        }
    if (flag) {
        console.log(i);
    }
    i++;
}

// **** Задание 2 ****
console.log("**** Задание 2 ****");
i = 0;
do {
    if (i == 0) {
        console.log("0 - это ноль");
    } else if (i % 2 == 0) {
        console.log(i + " - четное число");       
    } else {
        console.log(i + " - нечетное число");       
    }
    i++;
} while (i <= 10)

    // **** Задание 3 ****
console.log("**** Задание 3 ****");
for (i = 0; i <= 9; console.log(i++)) {
    
}
    // **** Задание 4 ****
console.log("**** Задание 4 ****");
let pict = "x";
for (i = 1; i <= 20; i++) {
    console.log(pict);
    pict = pict + "x";
}
