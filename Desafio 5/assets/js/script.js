// const listaDeInvitados = document.getElementById("invitados");
// const input = document.getElementById("nuevoInvitado");
// const boton = document.getElementById("agregarInvitado");

// const invitados = [];

// boton.addEventListener("click", () => {
//     const nuevoInvitado = { id: Date.now(), nombre: input.value};
//     console.log(nuevoInvitado);
//     invitados.push(nuevoInvitado);
//     input.value = "";

//     let html = "";
//     for (let i = 0; i < invitados.length; i++){
//         html += `<li>${invitados[i].nombre}  <button onclick="borrar(${invitados[i].id})">Eliminar</button></li>`;        
//     }
//     listaDeInvitados.innerHTML = html;
// });

// const borrar = (id) => {
//     const index = invitados.findIndex((invitado) => invitado.id === id);
//     invitados.splice(index, 1);
  

//     render();
// };

// const render = () => {
//     let html = "";
//     for (let i = 0; i < invitados.length; i++) {
//         html +=  `<li>${invitados[i].nombre} <button onclick="borrar(${invitados[i].id})`
//     }
//     listaDeInvitados.innerHTML = html;
// }

// const listaDeTareas = document.getElementById("tareas");
// const inputTareas = document.getElementById("nuevaTarea");
// const botonTareas = document.getElementById("agregarTarea");

// const tareas = [
//     {
//         id: 1,
//         descripcion: 'Bañar a Tommy',
//         completed: false
//     },
//     {
//         id: 2,
//         descripcion: 'Ir al supermercado',
//         completed: true 
//     },
//     {
//         id: 3,
//         descripcion: 'Comprar leche',
//         completed: true    
//     }
// ];

// function verTareas(){
//     const listaTareas = document.getElementById("tareas");
//     for (let tarea of tareas){
//         listaTareas.innerHTML+=
//         `
//         <span>${tarea.id}</span>
//         <span>${tarea.descripcion}</span>
//         <input type="checkbox" ${tarea.completed ? 'checked' : ''}>
//         <button onclick="tareaTerminada">X</button>
//         `
//     };
// }

// verTareas();

// botonTareas.addEventListener("click", () => {
//     const nuevaTarea = { id: Date.now(), descripcion: inputTareas.value};
//     console.log(nuevaTarea);
//     tareas.push(nuevaTarea);
//     inputTareas.value = "";

// let html = "";
//     for (let i = 0; i < tareas.length; i++){
//         html += `<li>${tareas[i].descripcion} <button onclick="tareaTerminada"(${tareas[i].id})">X</button></li>`;
//     }
//     listaDeTareas.innerHTML = html;
// });

//     const tareaTerminada = (id) => {
//         const index = tareas.findIndex((tarea) => tarea.id === id);
//         tareas.splice(index, 1);

// let html = "";
//     for (let i = 0; i < tareas.length; i++){
//         html += `<li>${tareas[i].descripcion} <button onclick="tareaTerminada"(${tareas[i].id})">X</button></li>`;
//     }
//     listaDeTareas.innerHTML = html;
// };

const tareas = [
    {
    id: 1, 
    descripcion: 'Ir al supermercado', 
    completada: false
    },
    {
    id: 2,
    descripcion: 'Hacer el desafio',
    completada: false
    },
    {
    id: 3,
    descripcion: 'Comprar leche',
    completada: true
    }
];

const render = () => {
    const listaDeTareas = document.getElementById('listaDeTareas');
    listaDeTareas.innerHTML = '';

    tareas.forEach((tarea, index) => {
        const nuevaTarea  = document.createElement('section');
        nuevaTarea.innerHTML = 
        `
            <span>${tarea.id}</span>
            <span>${tarea.descripcion}</span>
            <input type="checkbox" ${tarea.completada ? 'checked' : ''} onchange="toggleTarea(${index})">
            <button onclick="tareaLista(${index})">X</button>
        `;
        listaDeTareas.appendChild(nuevaTarea);
    });

    actualizarTareas();
};

const actualizarTareas = () => {
    const tareasTotales = document.getElementById('tareasTotales');
    const tareasRealizadas = document.getElementById('tareasRealizadas');

    tareasTotales.innerText = tareas.length;
    tareasRealizadas.innerText = tareas.filter(tarea => tarea.completada).length;
};

const nuevaTarea = () => {
    const input = document.getElementById('input');
    const nuevaTarea = {
        id: tareas.length + 1,
        descripcion: input.value,
        completada: false,
    };

    tareas.push(nuevaTarea);
    input.value = '';
    render();
};

const tareaLista = (index) => {
    tareas.splice(index, 1);
    render();
};

const toggleTarea = (index) => {
    tareas[index].completada = !tareas[index].completada;
    render();
};

render();