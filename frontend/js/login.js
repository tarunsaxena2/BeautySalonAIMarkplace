async function login(){

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

const response=await fetch("http://https://beauty-salon-ai-markplace-ve7m.vercel.app/api/auth/login",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

email,

password

})

});

const data=await response.json();

if(response.ok){

localStorage.setItem("token",data.token);

localStorage.setItem("user",JSON.stringify(data.user));

alert("Login Successful");

window.location="dashboard.html";

}else{

alert(data.message);

}

}