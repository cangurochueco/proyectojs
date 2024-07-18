function jugaradivinaminumerofv(){
    const numerofavorito = 22;

    let intentos = 0;
    let adivinado = false;

    while (adivinado == false) {
        const intento = parseInt(prompt("intenta adivinar mi numero favorito entre 1 y 100:"));
        intentos++;

        if(intento === numerofavorito){
            alert("¡FELICITACIONES! EL numero era " +
            numerofavorito + "Lo adivinnaste en " + intentos + "intentos.");
            adivinado = true
            } else if (intento < numerofavorito){
            alert("El numero es mas alto. Intenta de nuevo")
            } else {
            alert("El numero es mas bajo. intenta de nuevo.")
        }
    }
}
jugaradivinaminumerofv();