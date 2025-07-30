// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBHRhFlAv5v84IGaklSlxujMYPjPcPfKvo",
  authDomain: "student-teacher-booking-ca12c.firebaseapp.com",
  projectId: "student-teacher-booking-ca12c",
  storageBucket: "student-teacher-booking-ca12c.appspot.com",
  messagingSenderId: "675620310131",
  appId: "1:675620310131:web:b38493b375185e2344ee06",
  measurementId: "G-V13DZT9HCE"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ✅ Booking function
function bookAppointment() {
  const studentName = document.getElementById("studentName").value;
  const teacherName = document.getElementById("teacherName").value;
  const appointmentTime = document.getElementById("appointmentTime").value;

  if (!studentName || !teacherName || !appointmentTime) {
    alert("Please fill all fields.");
    return;
  }

  db.collection("appointments").add({
    studentName,
    teacherName,
    appointmentTime
  })
  .then(() => {
    alert("✅ Appointment booked successfully!");
    document.getElementById("studentName").value = "";
    document.getElementById("teacherName").value = "";
    document.getElementById("appointmentTime").value = "";
  })
  .catch((error) => {
    console.error("❌ Error booking appointment: ", error);
    alert("Error booking appointment. Check the console.");
  });
}

// ✅ Role selection (optional alert)
function selectRole(role) {
  alert("You selected: " + role);
}

// ✅ View Appointments
function viewAppointments() {
  const studentName = prompt("Enter your name to view appointments:");
  if (!studentName) return;

  db.collection("appointments").where("studentName", "==", studentName).get()
    .then((querySnapshot) => {
      const listDiv = document.getElementById("appointmentsList");
      listDiv.innerHTML = "";

      if (querySnapshot.empty) {
        listDiv.innerHTML = "<p>No appointments found.</p>";
        return;
      }

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const p = document.createElement("p");
        p.textContent = `Teacher: ${data.teacherName}, Time: ${data.appointmentTime}`;
        listDiv.appendChild(p);
      });
    })
    .catch((error) => {
      console.error("❌ Error fetching appointments:", error);
      alert("Error fetching appointments. See console.");
    });
}


