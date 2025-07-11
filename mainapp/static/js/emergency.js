// Ambulance Request Form 
  const form = document.getElementById("ambulanceForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Optionally, you can collect the data here
    const fullName = document.getElementById("fullName").value;
    const location = document.getElementById("location").value;
    const emergencyType = document.getElementById("emergencyType").value;
    const phone = document.getElementById("phone").value;

    // You can call an API here to submit the data
    // Example placeholder:
    console.log("Form submitted:", { fullName, location, emergencyType, phone });

    // Show confirmation
    alert("✅ Your ambulance request has been submitted!");

    // Clear form
    form.reset();
  });
