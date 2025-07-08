let question = document.getElementById("question");
question.innerHTML = "<strong>Moi : </strong>Quel est ton prénom ?"
let input = document.querySelector("input");
let answer = document.getElementById("answer");
answer.innerHTML = "<strong>Moi : </strong>";

input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        Bonjour ();
    }
});

function Bonjour () {
    let prenom = input.value;
    if (! isNaN(prenom) || prenom.length > 20){
        alert ("Ceci n'est pas un prénom !");
        input.value ="";
        prenom.focus();
    }else {
        answer.innerHTML = "<strong>Moi : </strong>Bonjour " + prenom;
        prenom.focu();
    }
}