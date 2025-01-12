"use script"
const main = document.querySelector("main")
const theme = document.querySelector("#checkbox")
const btns = document.querySelectorAll("btn-kors")
const korsine = document.querySelector("#korsine")
const parentKors = document.querySelector("#cors")
let kors = [];
setInterval(function(){
    alert("Вы еще здесь? Закажите что-нибудь <3")
}, 500000)

for (let i = 0; i < btns.length; i++) {
    
    btns[i].addEventListener("click", function(){
        console.log(1)
        kors.push(btns[i].parentElement.innerHTML)
    })
}

theme.addEventListener("click", function() {
    main.classList.toggle("dark-theme");
    main.classList.toggle("light-theme");
})

korsine.addEventListener("click", function(){
    main.classList.toggle("kors-theme")
    for (let i = 0; i < kors.length; i++){
        let newElem = document.createElement("DIV")
        newElem.innerHTML = kors[i]
        document.body.appendChild(newElem)
    }
})
