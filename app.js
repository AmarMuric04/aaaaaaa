// // let naslov = document.getElementById("naslov");
// // console.log(naslov.innerText);

// // naslov.style.color = "red";
// // naslov.style.format = "4rem";
// // naslov.innerText = "Promena"

// // let naslovClass = document.getElementsByClassName("nas");
// // console.log(naslovClass);

// // let naslovByTag = document.getElementsByTagName("h1");
// // console.log(naslovByTag);

// // let naslovByQuery = document.querySelectorr(".nas");
// // console.log(naslovByQuery);

// // let naslovByQueryAll = document.querySelectorAll("nas");
// // console.log(naslovByQueryAll);


// // let lista = document.getElementsByClassName("lista");

// // for (let i = 0; i < lista.length; i++) {
// //     lista[i].style.color = "green";
// //     lista[i].style.fontSize = "4rem";
// // }

// // let dugme = document.querySelector("button");
// // dugme.addEventListener("click", () => {
// //     naslov.style.color = "purple";
// //     naslov.style.fontSize = "4rem";
// // });

// // let list = document.querySelector(".list");

// // let item1 = document.createElement("li");
// // item1.innerText = "item1";

// // list.appendChild(item1);

// // let incr = document.querySelector(".increment");
// // let decr = document.querySelector(".decrement");
// // let broj = document.querySelector(".brojac");


// // let brojac = 0;
// // broj.innerHTML = brojac;

// // incr.addEventListener("click", () => {
// //     brojac++;
// //     broj.innerHTML = brojac;
// // });

// // decr.addEventListener ("click", () => {
// //     brojac--;
// //     broj.innerHTML = brojac;
// // });

// // localStorage.setItem('name', "Amar")

// // //localStorage.removeItem brise sta je u lokal stoarge

// // let ime = localStorage.getItem("name")
// // console.log(ime);

// // sessionStorage.setItem("name2","Amar");
// // // sessionStorage.removeItem("name2");
// // let ime2 = sessionStorage.getItem("name2")
// // console.log(ime2)

// let inp = document.querySelector(".inp");
// let btn = document.querySelector(".btn");
// let card = document.querySelector(".card");

// btn.addEventListener("click", ()=> {
// if(inp.value == "") {
//     alert("PRAZNO JE BRT")
// }
// else {
//     let h = document.createElement("h1");
//     h.innerText = inp.value;
//     card.appendChild(h);
//     inp.value=""
// }
// })