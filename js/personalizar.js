document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('.check__opcion');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {
            const price = parseInt(this.getAttribute('data-price'));
            const label = this.nextElementSibling.textContent.trim();

            if (this.checked) {
                totalPrice += price;
                // console.log(`El usuario eligió: ${label} - $ ${price.toLocaleString('es-CO')}`);
            } else {
                totalPrice -= price;
                // console.log(`El usuario deseleccionó: ${label} - $ ${price.toLocaleString('es-CO')}`);
            }

            totalPriceElement.textContent = totalPrice.toLocaleString('es-CO');
        });
    });

    // Vista previa de la imagen
    document.getElementById('imageUpload').addEventListener('change', function(event) {
        const file = event.target.files[0];
        const preview = document.getElementById('imagePreview').querySelector('img');

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            }

            reader.readAsDataURL(file);
        } else {
            preview.src = '';
            preview.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const dateInput = document.getElementById('fechaEntrega');
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() + 3);  // Añadir 3 días hábiles
    const dd = String(minDate.getDate()).padStart(2, '0');
    const mm = String(minDate.getMonth() + 1).padStart(2, '0'); // Enero es 0!
    const yyyy = minDate.getFullYear();
    
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    dateInput.min = formattedDate;
});
