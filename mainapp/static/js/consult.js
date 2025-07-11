// form handle 

document.getElementById("healthForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = this;
  const formData = new FormData(form);

  // ✅ Fake API response
  const mockData = [
    { doctor: "Dr. Riya Sharma", date: "2025-07-04", time: "10:00 AM" },
    { doctor: "Dr. Arjun Mehta", date: "2025-07-04", time: "2:00 PM" }
  ];

  const grid = document.getElementById("availabilityGrid");
  grid.innerHTML = "";
  mockData.forEach(slot => {
    const div = document.createElement("div");
    div.className = "slot-card";
    div.innerHTML = `<strong>${slot.doctor}</strong><br>${slot.date} at ${slot.time}`;
    grid.appendChild(div);
  });

  // ✅ Show section
  document.getElementById("availabilitySection").style.display = "block";

  // ✅ CLEAR FORM
  form.reset();
});

// Doctor Availability Info 

    const availabilityGrid = document.getElementById("availabilityGrid");

    const slots = [
        { date: "2025-07-01", time: "10:00 AM" },
        { date: "2025-07-01", time: "11:30 AM" },
        { date: "2025-07-02", time: "2:00 PM" },
    ];

    slots.forEach(slot => {
        const div = document.createElement("div");
        div.className = "slot-card";
        div.innerHTML = `<strong>${slot.date}</strong><br>${slot.time}`;
        availabilityGrid.appendChild(div);
    });

// Live Video Section 

    let localStream;
    const localVideo = document.getElementById("localVideo");
    const remoteVideo = document.getElementById("remoteVideo");

    document.getElementById("startCall").onclick = async () => {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;

        // In production, use WebRTC signaling (Socket.IO/Django Channels)
        alert("Video started – full call logic requires backend signaling server.");
    };

//  Chat Window 

    document.getElementById("chatForm").onsubmit = function (e) {
        e.preventDefault();
        const input = document.getElementById("chatInput");
        const message = input.value.trim();
        if (message) {
            const msgDiv = document.createElement("div");
            msgDiv.innerText = "You: " + message;
            document.getElementById("chatBox").appendChild(msgDiv);
            input.value = "";

            // Later: Send via fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message }) })
        }
    };

