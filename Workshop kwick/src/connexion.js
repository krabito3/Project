
let login = "http://greenvelvet.alwaysdata.net/kwick/api/login/" ;
let password= document.getElementById("typePasswordX");
let username = document.getElementById("registerUsername");
let form= document.getElementById("form");

form.addEventListener("submit",function  inscription(event) { 
    event.preventDefault();
       login=login+ username.value + "/"+ password.value;

       fetch(login)
       .then(response => response.json())
       .then( function( facteur){ 
           console.log(facteur);
           document.location="chat.html";
           localStorage.setItem("iduser", facteur.result.id);
           localStorage.setItem("tokenuser", facteur.result.token);
    } )
})