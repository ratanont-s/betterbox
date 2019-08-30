$(function () {
  // Show sign-up modal and hide sign-in modal
  $("#signUpModal").on("show.bs.modal", function (e) {
    $("#signInModal").modal("hide");
  });

  // Show sign-in modal and hide sign-up modal
  $("#signInModal").on("show.bs.modal", function (e) {
    $("#signUpModal").modal("hide");
  });

  // Send reset password
  $("#sendResetPassword").click(function () {
    Swal.fire({
      html: `<div class="text-center">
        <h5>Success!</h5>
        <div>Please check your inbox and follow the instruction to reset your password</div>
    </div>`,
      showConfirmButton: false
    });
    $("#signInModal").modal("hide");
  });

  // Sign-up success
  $("#btnSignUp").click(function () {
    Swal.fire({
      html: `<div class="text-center">
        <h5>Success!</h5>
        <p>Thank you for joining BetterBox</p>
    </div>`,
      showConfirmButton: false
    });
    $("#signUpModal").modal("hide");
  });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();