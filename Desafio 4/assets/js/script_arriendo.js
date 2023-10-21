
const propiedadesArriendo = [

    {
        id: 1,
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true,
    },
    {
        id: 2,
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true,
    },
    {
    id: 3,
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 3,
        baños: 2,
        costo: 2200,
        smoke: false,
        pets: false,
    },
    {
        id: 4,
        nombre: 'Apartamento para parejas',
        src: 'https://imgclasificados3.emol.com/Proyectos/imagenes//PR_FOTO_4636_1.jpg',
        descripcion: 'Este apartamento será el nido de amor de una suertuda pareja',
        ubicacion: ' 123 Love Street, TX 45678',
        habitaciones: 2,
        baños: 2,
        costo: 1300,
        smoke: true,
        pets: false,
    },
    {
        id:5,
        nombre: 'Casa en barrio residencial',
        src: 'https://http2.mlstatic.com/D_NQ_NP_647986-MLC71539691268_092023-O.webp',
        descripcion: 'Este acogedor hogar está ubicado en un barrio enfocado en la familia y el bienestar',
        ubicacion: '097 Family Avenue, CA 92329',
        habitaciones: 4,
        baños: 2,
        costo: 1500,
        smoke: true,
        pets: true,
    }
];

function verPropiedadesArriendo(){
    const arriendo = document.getElementById("containerArriendo");
    propiedadesArriendo.forEach(propiedades => {
        arriendo.innerHTML+=
        `
    <article class="card">
  <img class="card-img-top" src="${propiedades.src}" alt="">
      <article class="card-body">
          <h5 class="card-title">${propiedades.nombre}</h5>
          <p class="card-text"> ${propiedades.descripcion} </p>
          <p> Costo: <i class="fas fa-dollar-sign"></i> ${propiedades.costo} </p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedades.ubicacion} </p>
          <p><i class="fas fa-bed"></i> ${propiedades.habitaciones} Habitaciones | <i class="fas fa-bath"></i>  ${propiedades.baños} Baños </p>
          ${propiedades.smoke ? '<p class ="text-success"> <i class="fas fa-smoking"></i> Permitido fumar </p>' : '<p class ="text-danger" > <i class="fas fa-smoking-ban"></i> No se permite fumar </p>' }
        ${propiedades.pets ? '<p class ="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas  </p>' : ' <p class ="text-danger" > <i class="fa-solid fa-ban"></i> No se permiten mascotas </p>' }
      </article>
  </article>
    `      
    });
}

verPropiedadesArriendo()
