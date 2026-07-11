function collect_data() {

    console.log("Patient Personal Information");

    let Pname = document.getElementById("PatientName").value;
    console.log("Name: ", Pname);

    let PAge = document.getElementById("PatientAge").value;
    console.log("Age: ", PAge);

    let PEmail = document.getElementById("PatientEmail").value;
    console.log("Email: ", PEmail);

    let PGender = document.querySelector('input[name="Gender"]:checked').value;
    console.log("Gender: ", PGender);

    let DeptDoctor = document.querySelector('input[name="DeptDoctor"]:checked').value;
    console.log("Doctor Department: ", DeptDoctor);

    let PatientFile = document.getElementById("PatientFile").value;
    console.log("Patient Prescription: ", PatientFile);

    let PDob = document.getElementById("DOB").value;
    console.log("Date of Birth: ", PDob);

    let PAddress = document.getElementById("Address").value;
    console.log("Paitent Address: ", PAddress);

    let PCountry = document.getElementById("country").value;
    console.log("Patient citizen: ", PCountry);

    let PUserName = document.getElementById("username").value;
    console.log("Patient User Name: ", PUserName);

    let PPasswod = document.getElementById("password").value;
    console.log("Patient Password: ", PPasswod);

    let PConPasswod = document.getElementById("Conpassword").value;
    console.log("Patient Confirm Password: ", PPasswod);

    return false;
}
