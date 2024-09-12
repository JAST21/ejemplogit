console.log("HOLA MUNDO");

class Main {

    listaPersonas = ["Oscar", "Lara", 2];

    listar() {
        this.listaPersonas.map((persona) => {
            console.log(persona);
        })
    }

}

const Jallmar = new Main();

Jallmar.listar();


