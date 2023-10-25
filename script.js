document.getElementById("toastbtn").onclick = function () {
  var toastElList = document.getElementById("toast");
  var toast = new bootstrap.Toast(toastElList);
  var toastInput = document.getElementById("toast-input");
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!toastInput.value || !emailRegex.test(toastInput.value)) return;

  toast.show();
  toastInput.value = "";
};

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

// $(document).ready(function () {
//   $('[data-toggle="popover"]').popover();
// });
