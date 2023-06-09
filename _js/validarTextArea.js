function validateTextarea(event) {
    event.preventDefault();
    var textarea = document.getElementById("mensagem");
    // var pattern = new RegExp("^[A-Za-zÀ-ÿ'.,;:!?@ -]{10,50}$");

    var regex = /^[A-Za-zÀ-ÿ\s\'\-\,\.\;\:\!\?\@\0-9\º\ª]{10,500}$/;

    if (regex.test(textarea.value)) {
      textarea.setCustomValidity("");
    } else {
      textarea.setCustomValidity("A mensagem deve ter pelo menos 10 caracteres.");
    }
  }