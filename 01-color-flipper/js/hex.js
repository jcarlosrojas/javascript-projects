const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//add event lister for button
btn.addEventListener('click', function(){
    let hexColor = '#';
    //Generate a random number for each position of const hex
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

//Generate a random number according to the number of elements in hex
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
