document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const successModal = document.getElementById("successModal");
    const closeModalButton = document.getElementById("closeModal");
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
  
    form.addEventListener("submit", async function(event) {
      event.preventDefault();
      
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => (data[key] = value));
  
      try {
        const response = await fetch("https://formspree.io/mjvnndba", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          modalTitle.innerHTML  = '<i class="lni lni-checkmark-circle text-green-500" aria-hidden="true"></i> Mensaje Enviado';
          modalMessage.textContent = 'Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto contigo pronto.';
        } else {
            modalTitle.innerHTML  = '<i class="lni lni-cross-circle text-red-500" aria-hidden="true"></i> Envío Fallido';
            modalMessage.textContent = 'Hubo un problema al enviar el mensaje, inténtelo nuevamente o utilice otro medio para comunicarse con nosotros.';
    
        }
        
        successModal.classList.remove("hidden");
      } catch (error) {
        console.error("Error en el formulario:", error);
      }
    });
  
    closeModalButton.addEventListener("click", function() {
      successModal.classList.add("hidden");
    });
  });