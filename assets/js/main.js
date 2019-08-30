$(function() {
  // Show sign-up modal and hide sign-in modal
  $("#signUpModal").on("show.bs.modal", function(e) {
    $("#signInModal").modal("hide");
  });

  // Show sign-in modal and hide sign-up modal
  $("#signInModal").on("show.bs.modal", function(e) {
    $("#signUpModal").modal("hide");
  });

  // Send reset password
  $("#sendResetPassword").click(function() {
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
  $("#btnSignUp").click(function() {
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
