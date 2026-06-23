async function loadBookings(){

const response=await fetch("http://localhost:5000/api/bookings");

const bookings=await response.json();

const div=document.getElementById("bookings");

div.innerHTML="";

bookings.forEach(item=>{

div.innerHTML+=`

<div class="card">

<h2>${item.salon_name}</h2>

<p>${item.service_name}</p>

<p>${item.booking_date}</p>

<p>${item.booking_time}</p>

<p>Status : ${item.status}</p>

<button onclick="approve(${item.id})">

Approve

</button>

<button onclick="rejectBooking(${item.id})">

Reject

</button>

</div>

`;

});

}

async function approve(id){

await fetch("http://localhost:5000/api/bookings/"+id,{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

status:"Approved"

})

});

loadBookings();

}

async function rejectBooking(id){

await fetch("http://localhost:5000/api/bookings/"+id,{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

status:"Rejected"

})

});

loadBookings();

}

loadBookings();