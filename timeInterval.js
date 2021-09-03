let number = 0;
console.log("First : I am first");
console.log("second : I am second");
const intervalId = setInterval(() => {
    ++number;
    console.log(number);
    if (number > 15) {
        clearInterval(intervalId);
    }
}, 1000);
console.log("Third : He is third");
console.log("Fourth : She is fourth");
