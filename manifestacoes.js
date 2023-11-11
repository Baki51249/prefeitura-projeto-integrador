class FormSubmit {
   constructor(settings) {
      this.settings = settings;
      this.form = document.getElementById(settings.formId);
      this.formButton = document.getElementById(settings.buttonId);

      if (this.form) {
         this.url = this.form.getAttribute("action");
      }

      this.sendForm = this.sendForm.bind(this);
   }

   displayMessage(message) {
      const messageContainer = document.createElement("div");
      messageContainer.innerHTML = message;
      this.form.parentNode.insertBefore(messageContainer, this.form.nextSibling);
   }

   getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      
      fields.forEach((field) => {
         formObject[field.getAttribute("name")] = field.value;
      });

      return formObject;
   }

   async sendForm() {
      try {
         this.formButton.disabled = true;
         this.formButton.innerText = "Enviando...";

         await fetch(this.url, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
            },
            body: JSON.stringify(this.getFormObject()),
         });

         const successMessage = `<h1 class='success'>Obrigado ${this.getFormObject().nome}, sua manifestação foi anexada com sucesso.</h1>`;
         this.displayMessage(successMessage);

         // Hide the form after successful submission
         this.form.style.display = "none";
      } catch (error) {
         console.error("Error:", error);
         this.displayMessage(this.settings.error);
         throw new Error(error);
      }
   }

   init() {
      if (this.form) {
         this.formButton.addEventListener("click", this.sendForm);
      }

      return this;
   }
}

const formSubmit = new FormSubmit({
   formId: "manifestacaoForm",
   buttonId: "enviar",
   error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});

formSubmit.init();
     
