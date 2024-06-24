document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const successModal = document.getElementById("successModal");
    const closeModalButton = document.getElementById("closeModal");
  
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
          successModal.classList.remove("hidden");
        } else {
          console.error("Form submission failed:", response);
        }
      } catch (error) {
        console.error("Form submission error:", error);
      }
    });
  
    closeModalButton.addEventListener("click", function() {
      successModal.classList.add("hidden");
    });
  });