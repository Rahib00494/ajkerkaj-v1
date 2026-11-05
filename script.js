
const SUPABASE_URL = "https://kiwwmyshxttrbfzxyayf.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_QxuHxHCmy5Y_WRsnt8XVcg_6rXmXGKE";

const db = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = new FormData(bookingForm);

  const booking = {
    full_name: form.get("full_name").trim(),
    phone: form.get("phone").trim(),
    service: form.get("service").trim(),
    address: form.get("address").trim()
  };

  const button = bookingForm.querySelector('button[type="submit"]');
  button.disabled = true;

  const { error } = await db.from("bookings").insert([booking]);

  button.disabled = false;

  if (error) {
    alert("Booking failed: " + error.message);
    return;
  }

  alert("Booking successfully submitted!");
  bookingForm.reset();
});
