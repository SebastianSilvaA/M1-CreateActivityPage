class Activity{
    constructor(id,tittle,description,imgUrl){
        this.id = id;
        this.tittle = tittle;
        this.description = description;
        this.imgUrl = imgUrl;
    }
};

class Repository{
    constructor(){
        this.activities = [];
        this.id = 0

    }
    getAllActivities() {
        return this.activities

    }
    createActivity(tittle, description, imgUrl) {
        this.id++;
        const activity = new Activity(this.id, tittle, description, imgUrl)
        return this.activities.push(activity)
    }
    
    deleteActivity (id) {
        this.activities = this.activities.filter((Activity) => Activity.id !== id);
           return this.activities
    }

    
}

const instancia = new Repository();

function instance(activity){
    const {tittle, description, imgUrl} = activity;

    const titulo = document.createElement('h3');
    const descripcion = document.createElement('p');
    const img = document.createElement('img');

    titulo.innerText = tittle;
    titulo.classList.add('titutlo-card')
    descripcion.innerText = description;
    descripcion.classList.add('descripcion-card')
    img.src = imgUrl;
    img.classList.add('img-card')

    const contenedor = document.createElement('div')
    contenedor.appendChild(titulo);
    contenedor.appendChild(descripcion)
    contenedor.appendChild(img)
    contenedor.classList.add('card-container')

    return contenedor;
}

function convertirHtml() {
    const contenedorAct = document.querySelector('.contenedor-actividades')

    contenedorAct.innerHTML = ''

    const listado = instancia.getAllActivities();

    const mapear = listado.map(instance)

    mapear.forEach(element => {
        contenedorAct.appendChild(element)
    });
}

function handler() {
    
    const inputitulo = document.getElementById('tittleinput')
    const descripcioninput = document.getElementById('descripcioninput')
    const inputimg = document.getElementById('imginput')
    
    const valorTitulo = inputitulo.value;
    const valorDescripcion = descripcioninput.value;
    const valorImg = inputimg.value;
    
    
    if(!valorTitulo || !valorDescripcion || !valorImg) {
        alert('rellene el formulario')
        return;
    }
    
    instancia.createActivity(valorTitulo, valorDescripcion, valorImg);

    convertirHtml();

}

const boton = document.getElementById('boton')
boton.addEventListener('click', (event) => {
    event.preventDefault();
    handler();
})

