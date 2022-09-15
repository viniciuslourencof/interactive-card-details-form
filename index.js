function check () {

    var valid = true, error = "", field = "", regra;         

    function validateBlank() {
        if (field.value == '') {
            valid = false;
            field.classList.add("error-input");
            error.innerHTML = "Não pode ser vazio\r\n";
          } else {
            field.classList.remove("error-input");
            error.innerHTML = "";
          }       
          
        return valid;
    }

    function validateOnlyNumbers() {

        regra = /^[0-9]+$/;        

        if ((!field.value.match(regra)) || (field.value.length < 16)) {
            valid = false;
            field.classList.add("error-input");
            error.innerHTML = "Formato inválido\r\n";     
        } else {
          field.classList.remove("error-input");
          error.innerHTML = "";
        }

        return valid;
    }        
    
    field = document.getElementById("details__input-name");
    error = document.getElementById("details__input-name-error");

    validateBlank();

    field = document.getElementById("details__input-ccnumber");
    error = document.getElementById("details__input-ccnumber-error");    

    validateBlank();        
    validateOnlyNumbers();  
    

    field = document.getElementById("details__input-dateexp-month");
    error = document.getElementById("details__input-dateexp-month-error");

    validateBlank();

    field = document.getElementById("details__input-dateexp-year");
    error = document.getElementById("details__input-dateexp-year-error");

    validateBlank();
    
    return valid;
    
  }