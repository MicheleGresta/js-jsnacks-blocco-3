const userN = prompt("Quanti array vuoi?");
const array = [];

for (let i = 0; i < parseInt(userN); i++) {
    const array = [];
    for (let i = 0; i < 10; i ++) {
        array.push(Math.floor(Math.random() * 100)+1);
    }
    console.log(array);
}



