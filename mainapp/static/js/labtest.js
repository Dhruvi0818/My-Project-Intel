// JavaScript for confirmation 
function showConfirmation(event) {
    event.preventDefault(); // prevent form reload
    document.getElementById("confirmationBox").style.display = "block";

    // Generate a random token number
    const random = Math.floor(100 + Math.random() * 900);
    document.getElementById("tokenNumber").innerText = "LAB" + random;
}

//fornm js 
function showConfirmation(event) {
    event.preventDefault(); // prevent default form submit behavior

    // ✅ Optional: Show confirmation popup
    alert("Your lab test booking has been submitted successfully!");

    // ✅ Reset the form
    const form = event.target;

    // Method 1: Simply reset all fields
    form.reset();

    // (Optional) If you want to scroll to top or focus back to first input:
    // document.getElementById("name").focus();
}
