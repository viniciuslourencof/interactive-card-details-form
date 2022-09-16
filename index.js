

function submitForm () {

    var valid = true, error = "", field = "", regra;         

    function validateBlank() {
        if (field.value == '') {
          valid = false;
          field.classList.add("error-input");
          error.innerHTML = "Não pode ser vazio\r\n";
        } else {
          valid = true;
          field.classList.remove("error-input");
          error.innerHTML = "";
        }       
          
        return valid;
    }

    function validateOnlyNumbers() {

        regra = /^[0-9]+$/;        

        if (!field.value.match(regra)) {
          valid = false;
          field.classList.add("error-input");
          error.innerHTML = "Formato inválido, apenas números\r\n";     
        } else {
          valid = true;
          field.classList.remove("error-input");
          error.innerHTML = "";
        }

        return valid;
    }        

    function validateLength(length) {            

      if (field.value.length < length) {
        valid = false;
        field.classList.add("error-input");
        error.innerHTML = "Tamanho inválido\r\n";     
      } else {
        valid = true;
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

    if (validateBlank()) 
      if (validateOnlyNumbers())
        validateLength(16);      
    

    field = document.getElementById("details__input-dateexp-month");
    error = document.getElementById("details__input-dateexp-month-error");

    if (validateBlank())     
      validateOnlyNumbers();    

    field = document.getElementById("details__input-dateexp-year");
    error = document.getElementById("details__input-dateexp-year-error");

    if (validateBlank()) 
      validateOnlyNumbers();    

    field = document.getElementById("details__input-cvc");
    error = document.getElementById("details__input-cvc-error");      

    if (validateBlank()) 
      if (validateOnlyNumbers())
        validateLength(3);      

    if (valid) {
      document.getElementById('card-details__number').innerHTML = 
        document.getElementById('details__input-ccnumber').value.substring(0,4).concat(" ", 
                                                                                       document.getElementById('details__input-ccnumber').value.substring(4,8),
                                                                                       " ", 
                                                                                       document.getElementById('details__input-ccnumber').value.substring(8,12),
                                                                                       " ", 
                                                                                       document.getElementById('details__input-ccnumber').value.substring(12,16));  


      document.getElementById('card-details__name').innerHTML = document.getElementById('details__input-name').value;  
      document.getElementById('card-details__dateexp').innerHTML = document.getElementById('details__input-dateexp-month').value.concat('/',
                                                                                                                                        document.getElementById('details__input-dateexp-year').value);         
      document.getElementById('card-details-back__cvc').innerHTML = document.getElementById('details__input-cvc').value;        

      document.getElementById('details').classList.add("invisible");
      document.getElementById('confirm').classList.remove("invisible");
      
    }     
    
    
  }

