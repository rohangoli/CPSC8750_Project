// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

document.getElementById("redeem").onclick = function() {
  const code = document.getElementById("promo_code").value;
  if (code == "SignUp"){
    document.getElementById("product-list").children[1].setAttribute("style", "display: block !important;");
    document.getElementById("invalid_code").style.display = "none";
    document.getElementById("final").innerHTML = "$7";
  }else{
    document.getElementById("product-list").children[1].setAttribute("style", "display: none !important;");
    document.getElementById("invalid_code").style.display = "Inline";
    document.getElementById("final").innerHTML = "$12";
  }
  
};
