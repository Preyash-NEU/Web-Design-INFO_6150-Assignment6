if (document.getElementById("toastbtn")) {
  document.getElementById("toastbtn").onclick = function () {
    var toastElList = document.getElementById("toast");
    var toast = new bootstrap.Toast(toastElList);
    var toastInput = document.getElementById("toast-input");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!toastInput.value || !emailRegex.test(toastInput.value)) return;

    toast.show();
    toastInput.value = "";
  };
}

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
console.log("Hello    tooltipTriggerList:", tooltipTriggerList);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

window.onload = () => {
  const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const regExEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
  const regExNEUID = /\d{9}$/;
  const regExPhone = /\d{3}-?\d{3}-\d{4}$/;

  const display = (elementName, isInValid) => {
    if (isInValid) {
      document.getElementById(`error_${elementName}`).style.display = "block";
      document.myForm[elementName].style.border = "2px solid red";
    } else {
      document.getElementById(`error_${elementName}`).style.display = "none";
      document.myForm[elementName].style.border = "";
    }
  };

  let isNameInValid = true,
    isEmailInValid = true,
    isNEUIDInValid = true,
    isPhoneNumberInValid = true;
  const validate = (event) => {
    const { id, value, name } = event.target;

    switch (id) {
      case "name":
        if (!value.trim().toLowerCase().match(regExName)) {
          display(name, true);
          isNameInValid = true;
        } else {
          display(name, false);
          isNameInValid = false;
        }
        break;
      case "email":
        if (!value.trim().toLowerCase().match(regExEmail)) {
          display(name, true);
          isEmailInValid = true;
        } else {
          display(name, false);
          isEmailInValid = false;
        }
        break;
      case "neu-id":
        if (!value.trim().toLowerCase().match(regExNEUID)) {
          display(name, true);
          isNEUIDInValid = true;
        } else {
          display(name, false);
          isNEUIDInValid = false;
        }
        break;
      case "number":
        if (!value.trim().toLowerCase().match(regExPhone)) {
          display(name, true);
          isPhoneNumberInValid = true;
        } else {
          display(name, false);
          isPhoneNumberInValid = false;
        }
        break;
    }

    showHideLabelOnInput(id, value);

    if (
      isNameInValid ||
      isEmailInValid ||
      isNEUIDInValid ||
      isPhoneNumberInValid
    ) {
      document.myForm.submit.setAttribute("disabled", true);
    } else {
      document.myForm.submit.removeAttribute("disabled");
    }
  };

  function showHideLabelOnInput(id, val) {
    if (val.length > 0) {
      document.getElementById(`label_${id}`).style.display = "none";
    } else {
      document.getElementById(`label_${id}`).style.display = "block";
    }
  }

  function submitted(e) {
    e.preventDefault();

    if (
      !isNameInValid &&
      !isEmailInValid &&
      !isNEUIDInValid &&
      !isPhoneNumberInValid
    ) {
      alert("Data entered successfully");
    } else {
      alert("Please enter valid details");
    }
  }

  $("#spinner-container").show();
  $('button[type="submit"]').hide();

  setTimeout(function () {
    $("#spinner-container").hide();
  }, 500);

  $(document).ready(function () {
    // Count the total number of form fields
    const totalFields = $("form .input100").length;

    // Update the progress bar on input change
    $("form .input100").on("input", function () {
      const filledFields = $("form .input100").filter(function () {
        return $(this).val() !== "";
      }).length;

      const completionPercentage = (filledFields / totalFields) * 100;

      // Update the progress bar width and aria attributes
      $(".progress-bar")
        .css("width", completionPercentage + "%")
        .attr("aria-valuenow", completionPercentage);
    });
  });

  document.myForm.addEventListener("input", validate);
  document.myForm.addEventListener("submit", submitted);
};
