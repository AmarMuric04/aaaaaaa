let main = document.querySelector("#main")

async function getAllUser() {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");

    let response = data.json();
    return response;
}

let podaciKorisnika;

getAllUser().then ((d)=> {
    podaciKorisnika = d;

    podaciKorisnika.forEach(element => {
        createCard(element.name,element.email,element.username,element.phone,element.id);
    });
    console.log(podaciKorisnika);
})



function createCard(name, email, username, phone, id) {

    let card = document.createElement("div");
    card.className = "card";

    let ime = document.createElement("p")
    ime.className = "ime";
    ime.innerText =  name;

    let emailP = document.createElement("p")
    
    emailP.innerText =  email;

    let user = document.createElement("p")
    user.className = "username";
    user.innerText =  username;

    let broj = document.createElement("p")
    broj.className = "broj";
    broj.innerText =  phone;

    card.addEventListener("click", () => {
        window.location.href = `index1.html?id=${id}`;
    });
 
    card.appendChild(ime);
    card.appendChild(user);
    card.appendChild(broj);
    card.appendChild(emailP);
    main.appendChild(card);
}