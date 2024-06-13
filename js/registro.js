// FUNCIONALIDAD DRAG AND DROP IMAGEN
const fileInput = document.getElementById('image');
const dragZone = document.getElementById('result-image');
const img = document.getElementById('img-result');

// poner la misma funcionalidad del input de tipo file
dragZone.addEventListener('click', () => fileInput.click());

// cada vez que hacemos el drag and drop a la zona drag cambie su color de fondo

dragZone.addEventListener('dragover', (e) => {
    //  prevenir el funcionamiento por defecto, no se quiere que 
    //se habra en otra pestaña
    e.preventDefault();
    dragZone.classList.add('form-file-result--active');
});

// vuelve al color original
dragZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dragZone.classList.remove('form-file-result--active');
});

// funcion 
const uploadImage = (file) => {
    const fileReader = new FileReader();//lee archivos localmente
    fileReader.readAsDataURL(file);//lee la url del archivo
    
    fileReader.addEventListener('load', (e) => {
        img.setAttribute('src', e.target.result);
    });
}

// arrastar la imagen y verla
dragZone.addEventListener('drop', (e) => {
    e.preventDefault();// ya no abre una pestaña por defecto
    fileInput.files = e.dataTransfer.files; // le asignamos el archivo a fileInput
    const file = fileInput.files[0];
    console.log(file);// se captura el archivo , es decir, la imagen
    uploadImage(file);
});

// funcion para cambiar la imagen desde el explorador de archivos 
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    uploadImage(file);
});