function logout(){

localStorage.clear();

window.location="login.html";

}

const chatBox=document.getElementById("chatMessages");

const input=document.getElementById("userInput");

const sendBtn=document.getElementById("sendBtn");

sendBtn.addEventListener("click",sendMessage);

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});

function sendMessage(){

const message=input.value.trim();

if(message==="") return;

chatBox.innerHTML+=`

<div class="user-message">

${message}

</div>

`;

input.value="";

scrollBottom();

showTyping();

}

async function sendMessage(){

const message=input.value.trim();

if(message==="") return;

chatBox.innerHTML+=`

<div class="user-message">

${message}

</div>

`;

input.value="";

scrollBottom();

chatBox.innerHTML+=`

<div class="ai-message" id="typing">

🤖 Thinking...

</div>

`;

scrollBottom();

try{

const token=localStorage.getItem("token");

const response=await fetch(

"http://https://beauty-salon-ai-markplace-ve7m.vercel.app/api/ai/chat",

{

method:"POST",

headers:{

"Content-Type":"application/json",

Authorization:"Bearer "+token

},

body:JSON.stringify({

message:message

})

}

);

const data=await response.json();

document.getElementById("typing").remove();

chatBox.innerHTML+=`

<div class="ai-message">

${data.reply}

</div>

`;

scrollBottom();

}catch(error){

document.getElementById("typing").remove();

chatBox.innerHTML+=`

<div class="ai-message">

❌ Unable to connect to AI Server.

</div>

`;

scrollBottom();

}

}



function scrollBottom(){

chatBox.scrollTop=chatBox.scrollHeight;

}

function logout(){

localStorage.clear();

window.location="login.html";

}
