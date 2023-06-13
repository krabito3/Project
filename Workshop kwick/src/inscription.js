

let login = "http://greenvelvet.alwaysdata.net/kwick/api/signup/" ;
let password= document.getElementById("typePasswordX");
let username = document.getElementById("registerUsername");
let form= document.getElementById("form");

form.addEventListener("submit",function  inscription(event) { 
    event.preventDefault();
       login=login+ username.value + "/"+ password.value;

       fetch(login)
       .then(response => response.json())
       .then( function( result){ 
           console.log(result);
           document.location="index.html";
    } )
})