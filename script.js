const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("ধন্যবাদ! আপনার booking request গ্রহণ করা হয়েছে। আমরা খুব শীঘ্রই আপনার সাথে যোগাযোগ করব।");

  bookingForm.reset();
});