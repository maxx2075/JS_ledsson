// **** Задание 1 ****

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

