const propiedadesVenta = [

    {
        id: 1,
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: ' 123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false,
    },
    {
        id: 2,
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: true,
    },
    {
        id: 3,
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4500,
        smoke: false,
        pets: true,
    },
    {
        id: 4,
        nombre: 'Casa en isla paradisiaca',
        src: 'https://www.infobae.com/new-resizer/Xj8-cl2LSRpKTt6wf2Feia-1AyU=/1440x960/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/02/01082631/11051748_1039573546063117_3345576865927877919_o.jpeg',
        descripcion: 'Esta casa ubicada en una isla paradisiaca ofrece un lugar de descanso y diversión',
        ubicacion: '12 Honolulu Street, Hawaii, HI 01234',
        habitaciones: 2,
        baños: 1,
        costo: 7000,
        smoke: true,
        pets: true,
    },
];

function verPropiedadesVenta(){
    const venta = document.getElementById('containerVenta');
    propiedadesVenta.forEach(propiedades => { 
        venta.innerHTML+= 
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

verPropiedadesVenta()







