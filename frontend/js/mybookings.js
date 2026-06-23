function logout(){

localStorage.removeItem("token");

localStorage.removeItem("user");

window.location.href="login.html";
}

// ==========================
// Logout
// ==========================

function logout(){

localStorage.removeItem("token");

localStorage.removeItem("user");

window.location.href="login.html";

}

// ==========================
// Search Bookings
// ==========================

const searchInput=document.getElementById("searchInput");

searchInput.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const rows=document.querySelectorAll(".booking-row");

rows.forEach(row=>{

const text=row.innerText.toLowerCase();

if(text.includes(value)){

row.style.display="table-row";

}else{

row.style.display="none";

}

});

});

// ==========================
// Cancel Booking
// ==========================

function cancelBooking(btn){

const confirmDelete=confirm(

"Are you sure you want to cancel this booking?"

);

if(!confirmDelete){

return;

}

const row=btn.closest("tr");

row.style.opacity="0";

row.style.transform="translateX(100px)";

setTimeout(()=>{

row.remove();

},400);

}

// ==========================
// Load User
// ==========================

const user=JSON.parse(localStorage.getItem("user"));

if(user){

console.log(

"Welcome",

user.full_name || user.name

);

}

// ==========================
// Future API Integration
// ==========================

// async function loadBookings(){

 const token=localStorage.getItem("token");

 const response=await fetch(
 "http://localhost:5000/api/bookings",
 {

 headers:{
 Authorization:"Bearer "+token
 }

 });

 const data=await response.json();

 console.log(data);



 loadBookings();