//Upload Your Prescription 
document.getElementById("prescriptionForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const response = await fetch("/api/upload-prescription", {
        method: "POST",
        body: formData
    });

    const statusText = document.getElementById("uploadStatus");
    if (response.ok) {
        statusText.textContent = "✅ Prescription uploaded successfully!";
        this.reset();
    } else {
        statusText.textContent = "❌ Upload failed. Try again.";
    }
});

//Medicine  Search Box 
document.getElementById("searchInput").addEventListener("input", async function () {
    const query = this.value.trim();
    const resultsContainer = document.getElementById("searchResults");

    if (query.length < 2) {
        resultsContainer.innerHTML = "";
        return;
    }

    const response = await fetch(`/api/search-medicine?query=${encodeURIComponent(query)}`);
    const results = await response.json();

    resultsContainer.innerHTML = "";
    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No medicines found.</p>";
    } else {
        results.forEach(med => {
            const div = document.createElement("div");
            div.className = "result-item";
            div.innerHTML = `<strong>${med.name}</strong><br>${med.brand} — ₹${med.price}`;
            resultsContainer.appendChild(div);
        });
    }
});
