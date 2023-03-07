function reconocer_sonido(){
navigator.mediaDevices.getUserMedia({
    audio:true
})
reconocimiento = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/zTcbYJdx7/model.json", modelolisto)
}

function modelolisto(){
console.log("Ya estoy listo");
reconocimiento.classify(resultado_obtenido);
}

function resultado_obtenido(error, resultado){
    if (!error){
        console.log(resultado);
        sonido_detectado = resultado[0].label;
        confianza = Math.floor (resultado[0].confidence *100);
        document.getElementById("resultado_sonido").innerHTML = "Escucho: " + sonido_detectado;
        document.getElementById("resultado_confianza").innerHTML = "Presicion: " + confianza + "%";
        imagen_1.src = "aliens-01.png";
        imagen_2.src = "aliens-02.png";
        imagen_3.src = "aliens-03.png";
        imagen_4.src = "aliens-04.png";
        if (sonido_detectado == "Aplausos"){
            imagen_1.src = "aliens-01.gif";
        }
        else if (sonido_detectado == "Chasquidos"){
            imagen_2.src = "aliens-02.gif";
        }
        else if (sonido_detectado == "Silbido"){
            imagen_3.src = "aliens-03.gif";
        }
        else{
            imagen_4.src = "aliens-04.gif";
        }
    }
}

imagen_1 = document.getElementById("alien_1");
imagen_2 = document.getElementById("alien_2");
imagen_3 = document.getElementById("alien_3");
imagen_4 = document.getElementById("alien_4");

