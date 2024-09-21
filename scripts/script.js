console.log("hello world and codediggers");

const input = document.getElementById("input");
const button = document.querySelector(".submit");
const tree = document.querySelector(".tree");
const message = document.querySelector(".message");
let p1, p2;
let history = []
let treeArray = []

const rng = (max, min) => {
    if(isNaN(min)) min = 0;
    return Math.floor(Math.random() * (max + 1)) + min;
}
const shuffle = (array) => {
    var shuffled = [];
    var rand;
    while (array.length !== 0) {
      rand = Math.floor(Math.random() * array.length)
      shuffled.push(array.splice(rand, 1)[0]);
    }
    return shuffled;
}

button.onclick = () => {
    if(input.value === "" || input.value.length > 2 || input.value.length < 2) {
        input.value = "";
        return alert("請輸入2個字");
    }
    if(history.includes(input.value)) {
        input.value = "";
        alert("不要重複");
    }
    let obj = {}
    history.push(input.value);
    if(!p1) {
        p1 = input.value;
    }
    else if(!p2) {
        p2 = input.value;
    }
    obj.p1 = p1;
    obj.p2 = p2;
    if(p1 && p2) {
        p1 = p1[rng(p1.length - 1)] + p2[rng(p2.length - 1)];
        p1 = shuffle(p1.split('')).join('')
        p2 = undefined
    }
    obj.child = p1;
    console.log(obj)
    if(obj.p2) {
        treeArray.push(obj);
        tree.innerText += `\n${obj.p1} + ${obj.p2} = ${obj.child}`
    }
    message.innerText = `${p1} 要跟誰結婚`;
    input.value = "";
}

document.addEventListener("keypress", (e) => {
    if(e.code === 'Enter') {
        button.click()
    }
})