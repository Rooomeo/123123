
const carouselImages = [
    { src: "img/pipiiippipipiipiipipipzza20.png", link: "productos_piz.html" }, // Bebidas
    { src: "img/papapapncho20.png", link: "productos_pan.html" }, // Panchos
    { src: "img/latas_png20.png", link: "productos_beb.html" } // Pizzas
];

let currentImageIndex = 0;
const carouselImage = document.getElementById("carrusel-imagenes");
const prevBtn = document.getElementById("btn-izq");
const nextBtn = document.getElementById("btn-der");

function showImage(index) {
    carouselImage.src = carouselImages[index].src; 
}


prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentImageIndex);
});


nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(currentImageIndex);
});


carouselImage.addEventListener("click", () => {
    window.location.href = carouselImages[currentImageIndex].link; 
});

showImage(currentImageIndex);

document.getElementById("cont-formulario").addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
    
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
      input.classList.remove('error-input');
         const errorMessage = input.nextElementSibling;
    if (errorMessage) {
               errorMessage.style.display = 'none'; 
      }
    });
    
    const nombre = document.getElementById('nombre');
    if (nombre.value.trim() === "" || nombre.value.length > 50) {
         isValid = false;
       nombre.classList.add('error-input');
    nombre.nextElementSibling.style.display = 'block';
    }
    
    const edad = document.getElementById('edad');
     if (edad.value.trim() === "" || edad.value < 16) {
        isValid = false;
    edad.classList.add('error-input');
           edad.nextElementSibling.style.display = 'block';
    }
    
    const email = document.getElementById('email');
     if (email.value.trim() !== "" && !validateEmail(email.value)) {
        isValid = false;
           email.classList.add('error-input');
          email.nextElementSibling.style.display = 'block';
    }
    
    
    if (isValid) {
      document.getElementById('nombreFeedback').textContent = "Nombre: " + nombre.value;
       document.getElementById('edadFeedback').textContent = "Edad: " + edad.value;
      document.getElementById('emailFeedback').textContent = email.value ? "Correo electronico: " + email.value : " ";
           document.getElementById('feedback').style.display = 'block';
    
      document.getElementById('inscripcionForm').reset();
    }
    });
    
    function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
    }