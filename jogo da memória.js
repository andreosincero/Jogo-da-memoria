

// (function(){
    document.getElementById("gameover").style.zIndex = -1;

    let acertos = 0;

    var imagens = [];

    var escolhidas = [];

    var modo = "0";
    
    // easy();
    // hard();

    function normal(){
        
        modo = "normal";

        var acertos = 0;
    
        var imagens = [];
    
        var escolhidas = [];

        for (var i=0;i<32;i++){
            var card = document.getElementById("card" + i);
            card.style.width = 160 + "px";
            card.style.height = 240 + "px";
            card.style.left = 0 + "px";
            card.style.top = 0 + "px";
        }
                 
        for (var i=0;i<16;i++){
            var img = {
                src: "cartas/" + i + ".jpg",
                id: i%8,
            };
            imagens.push(img);
        }
        for (var i=0;i<32;i++){
            var card = document.getElementById("card" + i);
            card.style.display = "none";
        }
        for (var i=0;i<16;i++){
            var card = document.getElementById("card" + i);
            card.style.display = "block";
        }
    
        escolhidas = [];
        imagens = embaralhar(imagens);
    
        var frente = document.getElementsByClassName("pra-cima");
    
        // for(var i = 0; i < 16; i++){
        // 	//posiciona as cartas no tabuleiro
        // 	var card = document.querySelector("#card" + i);
        // 	card.style.left = (i % 8) === 0 ? 5 + "px" : 5 + ((i % 8) * 165) + "px";
        // 	card.style.top = i/8 >= 1 ? 250 + "px" : 5 + "px";
        // }
    
        for(var i = 0; i < 16; i++){
            var card = document.getElementById("card" + i);
            // console.log("card" + i);
            // card.style.left = (i === 0 || i === 8) ? 5 + "px" : i * 165 + 5 + "px";
            if ((i % 8) === 0){
                card.style.left = 5 + "px";
            }
            else{
                card.style.left = ((i % 8) * 165) + 5 + "px";
            }
            if (i/8 >= 1){
                card.style.top = 250 + "px";
            }
            else{
                card.style.top = 5 + "px";
            }
            card.onclick = virar;
            // card.addEventListener("click",virar,false);
    
            frente[i].style.background = "url('"+ imagens[i].src +"')";
            frente[i].style.backgroundSize = "cover";
            frente[i].style.backgroundPosition = "center";
            frente[i].setAttribute("id",imagens[i].id);
            console.log(frente[i].id)
        }
    }
    
    function easy(){
        
        modo = "easy";

        var acertos = 0;
    
        var imagens = [];
    
        var escolhidas = [];

        for (var i=0;i<32;i++){
            var card = document.getElementById("card" + i);
            card.style.width = 160 + "px";
            card.style.height = 240 + "px";
            card.style.left = 0 + "px";
            card.style.top = 0 + "px";
        }

        // normal();    
        for (var i=0;i<10;i++){
            var img = {
                src: "Angry Birds/" + i + ".jpg",
                id: i%5,
            };
            imagens.push(img);
        }
        for (var i=0;i<32;i++){
            var card = document.getElementById("card" + i);
            card.style.display = "none";
        }
        for (var i=0;i<10;i++){
            var card = document.getElementById("card" + i);
            card.style.display = "block";
        }
    
        escolhidas = [];
        imagens = embaralhar(imagens);
    
        var frente = document.getElementsByClassName("pra-cima");
    
        // for(var i = 0; i < 16; i++){
        // 	//posiciona as cartas no tabuleiro
        // 	var card = document.querySelector("#card" + i);
        // 	card.style.left = (i % 8) === 0 ? 5 + "px" : 5 + ((i % 8) * 165) + "px";
        // 	card.style.top = i/8 >= 1 ? 250 + "px" : 5 + "px";
        // }
    
        for(var i = 0; i < 10; i++){
            var card = document.getElementById("card" + i);
            // console.log("card" + i);
            // card.style.left = (i === 0 || i === 8) ? 5 + "px" : i * 165 + 5 + "px";
            if ((i % 5) === 0){
                card.style.left = 5 + "px";
            }
            else{
                card.style.left = ((i % 5) * 165) + 5 + "px";
            }
            if (i/5 >= 1){
                card.style.top = 250 + "px";
            }
            else{
                card.style.top = 5 + "px";
            }
            card.onclick = virar;
            // card.addEventListener("click",virar,false);
    
            frente[i].style.background = "url('"+ imagens[i].src +"')";
            frente[i].style.backgroundSize = "cover";
            frente[i].style.backgroundPosition = "center";
            frente[i].setAttribute("id",imagens[i].id);
            console.log(frente[i].id)
        }
        for (var i=10;i<32;i++){
            var card = document.getElementById("card" + i);
            card.style.display = "none";
        }
    }
    
    function hard(){
        
        modo = "hard";

        var acertos = 0;
    
        var imagens = [];
    
        var escolhidas = [];

        for (var i=0;i<32;i++){
            var card = document.getElementById("card" + i);
            card.style.width = 160 + "px";
            card.style.height = 240 + "px";
            card.style.left = 0 + "px";
            card.style.top = 0 + "px";
        }

        for (var i=0;i<32;i++){
            var card = document.getElementById("card" + i);
            card.style.display = "none";
        }
        for (var i=0;i<32;i++){
            var card = document.getElementById("card" + i);
            card.style.display = "block";
        }
    
        // normal();
        for (var i=0;i<32;i++){
            var img = {
                src: "Frutas/" + i + ".jpg",
                id: i%16,
            };
            imagens.push(img);
        }
    
        escolhidas = [];
        imagens = embaralhar(imagens);
    
        var frente = document.getElementsByClassName("pra-cima");
    
        // for(var i = 0; i < 16; i++){
        // 	//posiciona as cartas no tabuleiro
        // 	var card = document.querySelector("#card" + i);
        // 	card.style.left = (i % 8) === 0 ? 5 + "px" : 5 + ((i % 8) * 165) + "px";
        // 	card.style.top = i/8 >= 1 ? 250 + "px" : 5 + "px";
        // }
    
        for(var i = 0; i < 32; i++){
            var card = document.getElementById("card" + i);
            card.style.width = 80 + "px";
            card.style.height = 120 + "px";
            // console.log("card" + i);
            // card.style.left = (i === 0 || i === 8) ? 5 + "px" : i * 165 + 5 + "px";
            if ((i % 8) === 0){
                card.style.left = 5 + "px";
            }
            else{
                card.style.left = ((i % 8) * 85) + 5 + "px";
            }
            
            if (i == 0){
                card.style.top = 5 + "px";
            }
            else if (i <= 8 && i/8 <= 1 && i != 0){
                card.style.top = 130 + "px";
            }
            else if (i > 8 && i <= 16 && i/16 <= 1){
                card.style.top = 250 + "px";
            }
            else if (i > 16 && i <= 24 && i/24 <= 1){
                card.style.top = 370 + "px";
            }
            // else if (i > 24 && i <= 32 && i/32 <= 1){
            //     card.style.top = 490 + "px";
            // }
            else{
                card.style.top = 5 + "px";
            }
            card.onclick = virar;
            // card.addEventListener("click",virar,false);
    
            frente[i].style.background = "url('"+ imagens[i].src +"')";
            frente[i].style.backgroundSize = "cover";
            frente[i].style.backgroundPosition = "center";
            frente[i].setAttribute("id",imagens[i].id);
            console.log(frente[i].id)
        }
        for (var i=16;i<32;i++){
            var card = document.getElementById("card" + i);
            card.style.display = "0";
        }
    }

    function virar(){
        if (escolhidas.length < 2){
            var face = this.getElementsByClassName("virada");
            
            if (face[0].classList.length > 2){
                return;
            };
            
            face[0].classList.toggle("flipada");
            face[1].classList.toggle("flipada");
            escolhidas.push(this);

            if (escolhidas.length == 2){
                if (escolhidas[0].childNodes[3].id === escolhidas[1].childNodes[3].id){
                    escolhidas[0].childNodes[1].classList.toggle("acertou");
                    escolhidas[0].childNodes[3].classList.toggle("acertou");
                    escolhidas[1].childNodes[1].classList.toggle("acertou");
                    escolhidas[1].childNodes[3].classList.toggle("acertou");

                    acerto_sinal();

                    acertos = acertos + 1;

                    escolhidas=[];

                    switch(acertos){
                        case 8:
                        if(modo == "normal"){
                            gameover();
                        }
                        case 5:
                        if(modo == "easy"){
                            gameover();
                        }
                        case 16:
                        if(modo == "hard"){
                            gameover();
                        }
                    }
                }
            }
        }
        else{
            escolhidas[0].childNodes[1].classList.toggle("flipada");
            escolhidas[0].childNodes[3].classList.toggle("flipada");
            escolhidas[1].childNodes[1].classList.toggle("flipada");
            escolhidas[1].childNodes[3].classList.toggle("flipada");
            escolhidas=[];
        }
    }

    
    function embaralhar(Array1){
        var Array2=[];

        while (Array2.length !== Array1.length){
            var i = Math.floor(Math.random()*Array1.length);
            
            if (Array2.indexOf(Array1[i]) < 0){
                Array2.push(Array1[i]);
            }
        }
        return Array2;
    }

    function acerto_sinal(){
        
    }

    function gameover(){
        document.getElementById("gameover").style.zIndex = 1;
    }

    function restart(){
        document.getElementById("gameover").style.zIndex = -1;
        location.reload();
    }



// }());