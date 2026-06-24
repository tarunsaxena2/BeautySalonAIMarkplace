async function loadSalons(){

const response = await fetch("http://https://beauty-salon-ai-markplace-ve7m.vercel.app/api/salons");

const salons = await response.json();

const container = document.getElementById("salons");

container.innerHTML="";

salons.forEach(salon=>{

container.innerHTML += `

<div class="card">

<h2>${salon.salon_name}</h2>

<p>${salon.description}</p>

<p>${salon.address}</p>

<button onclick="book(${salon.id})">

Book Now

</button>

</div>

`;

});

}
// Search Salon

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

const value = this.value.toLowerCase();

const cards = document.querySelectorAll(".salon-card");

cards.forEach(card=>{

const text = card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

function logout(){

localStorage.clear();

window.location="login.html";

}

function book(id){

localStorage.setItem("salonId",id);

window.location="booking.html";

}

loadSalons();