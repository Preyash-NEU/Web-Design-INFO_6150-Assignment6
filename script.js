window.onload = () => 
{
    const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regExEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
    const regExNEUID = /\d{9}$/;
    const regExPhone = /\d{3}-?\d{3}-\d{4}$/;

    const display = (elementName, isInValid) => 
    {
        if(isInValid) 
        {
            document.getElementById(`error_${elementName}`).style.display = "block";
            document.myForm[elementName].style.border = "2px solid red";
        }
        else 
        {
            document.getElementById(`error_${elementName}`).style.display = "none";
            document.myForm[elementName].style.border = "";
        }
    }

    let isNameInValid = true, isEmailInValid = true, isNEUIDInValid = true, isPhoneNumberInValid = true;
    const validate = event => 
    {
        console.log('input');
        const {id, value, name} = event.target;

        switch(id) 
        {
            case "name":
                if(!value.trim().toLowerCase().match(regExName)) 
                {
                    display(name, true);
                    isNameInValid = true;
                }else if (regExName) {
                    isNameInValid = false;
                }
                else {
                    display(name, false);
                    isNameInValid = false;
                }
                break;
            case "email":
                if(!value.trim().toLowerCase().match(regExEmail)) {
                    display(name, true);
                    isEmailInValid = true;
                }
                else {
                    display(name, false);
                    isEmailInValid = false;
                }
                break;
            case "neu-id":
                if(!value.trim().toLowerCase().match(regExNEUID)) {
                    display(name, true);
                    isNEUIDInValid = true;
                } else {
                    display(name, false);
                    isNEUIDInValid = false;
                }
                break; 
            case "number":
                if(!value.trim().toLowerCase().match(regExPhone)) {
                    display(name, true);
                    isPhoneNumberInValid = true;
                } else {
                    display(name, false);
                    isPhoneNumberInValid = false;
                }
                break;
                
        }

        if(isNameInValid || isEmailInValid || isNEUIDInValid || isPhoneNumberInValid) {
            document.myForm.submit.setAttribute('disabled', true);
        } else {
            document.myForm.submit.removeAttribute('disabled');
        }
    }


    function submitted(e){
        console.log('submit');
        e.preventDefault();

        if(!isNameInValid && !isEmailInValid && !isNEUIDInValid && !isPhoneNumberInValid){
            alert("Data entered successfully");
        }
        else{
            alert("Please enter valid details")
        }
    }

    document.myForm.addEventListener('input', validate);
    document.myForm.addEventListener('submit', submitted);
}