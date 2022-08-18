class Usuarios {
  constructor() {
    (this.nombre = "Bruno"),
      (this.apellido = "Malagoli"),
      (this.libros = [
        { nombre: "El señor de las moscas", autor: "William Golding" },
        { nombre: "Fundacion", autor: "Isaac Asimov" },
      ]),
      (this.mascotas = ["Gato", "Perro", "Pajaro", "Pez"]);
  }

  getFullName() {
    console.log(
      `Nombre completo del usuario : ${this.nombre} ${this.apellido}`
    );
    return `Nombre completo del usuario : ${this.nombre} ${this.apellido}`;
  }
  addMascota(mascota) {
    this.mascotas.push(mascota);
    console.log("Mascota agregada: " + mascota);
  }
  countMascotas() {
    console.log(
      `La cantidad de mascotas del usuario es ${this.mascotas.length}`
    );
    return `La cantidad de mascotas del usuario es ${this.mascotas.length}`;
  }
  addBook(nombreLibro, autorLibro) {
    const bookObj = { nombre: nombreLibro, autor: autorLibro };
    this.libros.push(bookObj);
    console.log("El libro y autor fueron agregados correctamente");
  }
  getBookNames() {
    let nombresLibro = [];
    this.libros.map((libro) => {
      nombresLibro.push(libro.nombre);
    });
    console.log(nombresLibro);
    return nombresLibro;
  }
}

const Usuario = new Usuarios();

Usuario.getFullName();
Usuario.addMascota("Mono");
Usuario.countMascotas();
Usuario.addBook("Pragmatic programmer", "Dave Thomas");
Usuario.getBookNames();
