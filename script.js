function scrollToParking(){
document.getElementById("parking").scrollIntoView({
behavior:"smooth"
});
}

function sendMessage(){

let input=document.getElementById("userInput");

let text=input.value.trim();

if(text=="") return;

let chat=document.getElementById("chatBox");

chat.innerHTML+="<div class='user'>"+text+"</div>";

let reply="";

text=text.toLowerCase();

if(text.includes("available")){

reply="Parking slots available: P1,P3 and P4.";

}
else if(text.includes("fee")){

reply="Parking fee is ₹50 per hour.";

}
else if(text.includes("location")){

reply="Parking is located near the main entrance.";

}
else if(text.includes("book")){

reply="Booking feature will be available soon.";

}
else{

reply="Sorry, I didn't understand. Please ask about parking, fee, booking or location.";

}

chat.innerHTML+="<div class='bot'>🤖 "+reply+"</div>";

input.value="";

chat.scrollTop=chat.scrollHeight;

}