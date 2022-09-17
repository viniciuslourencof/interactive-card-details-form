
function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mcc(v){  

  v=v.replace(/^(\d{4})(\d)/g,"$1 $2");
  v=v.replace(/^(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3");
  v=v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3 $4");
  return v;
}

function submitForm () {

    var formValid = true, valid = true, error = "", field = "", regra = /^[0-9]+$/;             

    function validateBlank() {
        if (field.value == '') {
          formValid = false;
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
        
        var value = field.value.replace(/\s/g, '');        

        if (!value.match(regra)) {
          formValid = false;
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
      
      var value = field.value.replace(/\s/g, '');        

      if ((value.length < length) || (value.length > length))  {
        formValid = false;
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

    if (formValid) {
      document.getElementById('card-details__number').innerHTML = document.getElementById('details__input-ccnumber').value;                                                                        
      document.getElementById('card-details__name').innerHTML = document.getElementById('details__input-name').value;  
      document.getElementById('card-details__dateexp').innerHTML = document.getElementById('details__input-dateexp-month').value.concat('/',document.getElementById('details__input-dateexp-year').value);         
      document.getElementById('card-details-back__cvc').innerHTML = document.getElementById('details__input-cvc').value;              
      
      document.getElementById('details').classList.add("invisible");      
      document.getElementById('confirm').classList.remove("invisible");                                  
    }        
    
  }

  function detailsVisible() {
      document.getElementById('details').classList.remove("invisible");
      document.getElementById('confirm').classList.add("invisible");
      
      document.getElementById('details__input-ccnumber').value = '';
      document.getElementById('details__input-name').value = '';
      document.getElementById('details__input-dateexp-month').value = '';
      document.getElementById('details__input-dateexp-year').value = '';
      document.getElementById('details__input-cvc').value = '';      

  }

