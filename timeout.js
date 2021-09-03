function fifth() {
    console.log('I am between');
}
console.log('First : I am first');
console.log('second : I am second');
fifth();
// setTimeout(fifth, 3000)
setTimeout(function () {
    console.log('I am after him');
}, 4000);
setTimeout(() => {
    console.log('Here we go');
}, 2000)
console.log('Third : He is third');
console.log('Fourth : She is fourth');