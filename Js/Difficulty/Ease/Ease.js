window.onload = function(){
    let game = document.getElementById("crossandtoeseasy");
    let hod = 0;
    let valwinner = document.getElementById("valwinner");
    let exit = document.getElementById("exit");
    exit.addEventListener("click",function(){
        window.location.href = 'index.html';
    })
    game.addEventListener("click",function(event){
        if(hod%2==0){
            event.target.innerHTML = "x";
        }
        else{
            event.target.innerHTML = "0";
        }
        hod++;
        winners();
    })
    function winners(){
        let winners = document.getElementsByClassName("elementseasy");
        if(winners[0].innerHTML == "x" && winners[1].innerHTML == "x" && winners[2].innerHTML == "x"){
            alert("Выиграли крестики");
            valwinner.innerHTML = "<p style = 'color:#08ffbd'>Вы выиграли</p>";
            setTimeout(restart,5000);
        }
        else if(winners[3].innerHTML == "x" && winners[4].innerHTML == "x" && winners[5].innerHTML == "x"){
            alert("Выиграли крестики");
            valwinner.innerHTML = "<p style = 'color:#08ffbd'>Вы выиграли</p>";
            setTimeout(restart,5000);
        }
        else if(winners[6].innerHTML == "x" && winners[7].innerHTML == "x" && winners[8].innerHTML == "x"){
            alert("Выиграли крестики");
            valwinner.innerHTML = "<p style = 'color:#08ffbd'>Вы выиграли</p>";
            setTimeout(restart,5000);
        }
        else if(winners[0].innerHTML == "x" && winners[3].innerHTML == "x" && winners[6].innerHTML == "x"){
            alert("Выиграли крестики");
            valwinner.innerHTML = "<p style = 'color:#08ffbd'>Вы выиграли</p>";
            setTimeout(restart,5000);
        }
        else if(winners[1].innerHTML == "x" && winners[4].innerHTML == "x" && winners[7].innerHTML == "x"){
            alert("Выиграли крестики");
            valwinner.innerHTML = "<p style = 'color:#08ffbd'>Вы выиграли</p>";
            setTimeout(restart,5000);
        }
        else if(winners[2].innerHTML == "x" && winners[5].innerHTML == "x" && winners[8].innerHTML == "x"){
            alert("Выиграли крестики");
            valwinner.innerHTML = "<p style = 'color:#08ffbd'>Вы выиграли</p>";
            setTimeout(restart,5000);
        }
        else if(winners[0].innerHTML == "x" && winners[4].innerHTML == "x" && winners[8].innerHTML == "x"){
            alert("Выиграли крестики");
            valwinner.innerHTML = "<p style = 'color:#08ffbd'>Вы выиграли</p>";
            setTimeout(restart,5000);
        }
        else if(winners[2].innerHTML == "x" && winners[5].innerHTML == "x" && winners[6].innerHTML == "x"){
            alert("Выиграли крестики");
            valwinner.innerHTML = "<p style = 'color:#08ffbd'>Вы выиграли</p>";
            setTimeout(restart,5000);
        }


        else if(winners[0].innerHTML == "0" && winners[1].innerHTML == "0" && winners[2].innerHTML == "0"){
            alert("Выиграли нолики");
            valwinner.innerHTML = "<p style = 'color:#ff2908'>Победил соперник</p>";
            setTimeout(restart,5000);
        }
        else if(winners[3].innerHTML == "0" && winners[4].innerHTML == "0" && winners[5].innerHTML == "0"){
            alert("Выиграли нолики");
            valwinner.innerHTML = "<p style = 'color:#ff2908'>Победил соперник</p>";
            setTimeout(restart,5000);
        }
        else if(winners[6].innerHTML == "0" && winners[7].innerHTML == "0" && winners[8].innerHTML == "0"){
            alert("Выиграли нолики");
            valwinner.innerHTML = "<p style = 'color:#ff2908'>Победил соперник</p>";
            setTimeout(restart,5000);
        }
        else if(winners[0].innerHTML == "0" && winners[3].innerHTML == "0" && winners[6].innerHTML == "0"){
            alert("Выиграли нолики");
            valwinner.innerHTML = "<p style = 'color:#ff2908'>Победил соперник</p>";
            setTimeout(restart,5000);
        }
        else if(winners[1].innerHTML == "0" && winners[4].innerHTML == "0" && winners[7].innerHTML == "0"){
            alert("Выиграли нолики");
            valwinner.innerHTML = "<p style = 'color:#ff2908'>Победил соперник</p>";
            setTimeout(restart,5000);
        }
        else if(winners[2].innerHTML == "0" && winners[5].innerHTML == "0" && winners[8].innerHTML == "0"){
            alert("Выиграли нолики");
            valwinner.innerHTML = "<p style = 'color:#ff2908'>Победил соперник</p>";
            setTimeout(restart,5000);
        }
        else if(winners[0].innerHTML == "0" && winners[4].innerHTML == "0" && winners[8].innerHTML == "0"){
            alert("Выиграли нолики");
            valwinner.innerHTML = "<p style = 'color:#ff2908'>Победил соперник</p>";
            setTimeout(restart,5000);
        }
        else if(winners[2].innerHTML == "0" && winners[5].innerHTML == "0" && winners[6].innerHTML == "0"){
            alert("Выиграли нолики");
            valwinner.innerHTML = "<p style = 'color:#ff2908'>Победил соперник</p>";
            setTimeout(restart,5000);
        }
    }
    function restart(){
        window.location.href = 'easy.html';
    }
}