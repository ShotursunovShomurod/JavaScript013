// masala1
// {
//     function onlyNumbers(arr) {
//         return arr.filter(num => typeof num === 'number' && num > 0);
//     }

//     console.log(onlyNumbers([-5, 6, 3, -3, false]));
//     console.log(onlyNumbers([12, -4, 5, -6, 33, true]));
// }

// masala2
// {
//     function tenth(num) {
//         return Math.floor((num % 100) / 10);
//     }

//     console.log(tenth(123));
//     console.log(tenth(4568));
// }

// masala3
// {
//     function binary(num) {
//         if (num === 1) return true;
//         if (num === 0) return false;
//         return null;
//     }

//     console.log(binary(1));
//     console.log(binary(0));
//     console.log(binary(7));
// }

// masala4
// {
//     function card(number, trueFalse) {
//         if (trueFalse) return number;
//         return number.slice(0, 4) + " **** **** **" + number.slice(-2);
//     }
//     console.log(card("8600 1234 5651 2589", true));
//     console.log(card("8600 5464 2332 4589", false));
// }

// masala5
// {
// {
//     function password(str){
//         return `${str === "123456hello"}`
//     }
//     console.log(password(("123456hello")));
// }
// }

// masala6
// {
//     function camelCase(str) {
//         return str.split('-').map((word) => {
//             if (word === 0) return word.toLowerCase();
//             return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         }).join('');
//     }

//     console.log(camelCase("kabab-case"));
//     console.log(camelCase("lorem-ipsum-dolor"));
// }

// masala7
// {
//     function bigAndSmall(str) {
//         let numbers = str.split(' ').map(Number);
//         let max = Math.max(...numbers);
//         let min = Math.min(...numbers);
//         return `${max} ${min}`;
//     }

//     console.log(bigAndSmall("1 2 3 4 5"));
//     console.log(bigAndSmall("5 25 33 44"));
// }
