function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);



function mostrarOcultarDiv(nomeDiv) {
    var div = document.getElementById(nomeDiv);

    if (div.style.display === "" || div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function fecharDiv(nomeDiv) {
    var div = document.getElementById(nomeDiv);
    div.style.display = "none";
}
    function exibirMensagemdesligar() {
        alert("IMPOSSIBLE");
    }

    function exibirMensagempasta() {
        alert("Empty");
    }

    function exibirMensagem() {
        alert("Calculator not found :/");
    }

    