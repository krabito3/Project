let online = "http://greenvelvet.alwaysdata.net/kwick/api/user/logged";
let ligne = document.getElementById("ligne");
let iduser = localStorage.getItem("iduser");
let tokenuser = localStorage.getItem("tokenuser");

function kolo() {
    online = online + "/"+ tokenuser;
    fetch(online)
        .then(Response => Response.json())
        .then(function (lolo) {
            console.log(lolo);

            for (let i = 0; i < lolo.result.user.length; i++) {
                let div = document.createElement("div");
                div.className="user-message"
                let text = document.createTextNode(lolo.result.user[i]);
                div.appendChild(text);
                ligne.appendChild(div);
            }



        })
}

kolo();