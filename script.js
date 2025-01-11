"use script"
const main = document.querySelector("main")
const theme = document.querySelector("#checkbox")
const btn = document.querySelectorAll("#btn-kors")
const btnMain = document.querySelector("#btn-main")
const mainKors = document.querySelector("#main-kors")
const korsine = document.querySelector("#korsine")
let kors = [];

theme.addEventListener("click", function() {
    main.classList.toggle("dark-theme");
    main.classList.toggle("light-theme");
})



// btnMain.addEventListener("click", function(){
//     console.log(1)
//     main.style.display = "0";
//     mainKors.style.display = "none";
// })

// korsine.addEventListener("click", function(){
//     main.style.display = "none";
//     mainKors.style.display = "0";
//     for (let i = 0; i < kors.length; i++){
//         document.body.createElement(kors[i]);
//     }
// })
