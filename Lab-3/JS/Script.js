function collect_data() {

    console.log("Patient Personal Information");

    let Pname = document.getElementById("PatientName").value;
    console.log("Name: ", Pname);


    if (Pname == "") {
        document.getElementById("NameError").innerHTML = "Name Can Not Be Empty";
        return false;
    }
    if (Pname.length < 5) {
        document.getElementById("NameError").innerHTML = "Name at least 5 char";
        return false;
    }
    console.log(Pname);

    let PAge = document.getElementById("PatientAge").value;
    console.log("Age: ", PAge);

    if (PAge == "") {
        document.getElementById("AgeError").innerHTML = "Age Can Not Be Empty";
        return false;
    }
    if (PAge < 0) {
        document.getElementById("AgeError").innerHTML = "Age Can Not Be Negative";
        return false;
    }

    if (PAge < 18) {
        document.getElementById("AgeError").innerHTML = "You are Minor";
        return false;
    }


    console.log(PAge);


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
    let hasLetter = false;
    let hasNumber = false;
    let hasSpecial = false;

    console.log("Patient Password: ", PPasswod);

    let PConPasswod = document.getElementById("Conpassword").value;
    console.log("Patient Confirm Password: ", PConPasswod);


    for (let item of PConPasswod) {
        if (item >= 'A' && item <= 'Z' || item >= 'a' && item <= 'z') {
            hasLetter = true;
        }
        if (item >= '0' && item <= '9') {
            hasNumber = true;
        }
        if (!(item >= 'A' && item <= 'Z' || item >= 'a' && item <= 'z') && !(item >= '0' && item <= '9')) {
            hasSpecial = true;
        }
    }

    if (hasLetter && !hasNumber && !hasSpecial || !hasLetter && hasNumber && !hasSpecial) {
        document.getElementById("AlertPass").innerHTML = "Weak Password";
    }
    else if (hasLetter && hasNumber && !hasSpecial) {
        document.getElementById("AlertPass").innerHTML = "Medium Password";
    }
    if (hasLetter && hasNumber && hasSpecial) {
        document.getElementById("AlertPass").innerHTML = "Strong Password";
    }

    alert("Welcome");

    return false;
}



/*
let a =10;
if(a>10)
{
    a++;
    console.log("Value of a: ",a);
}
else{
    a--;
    a=11;
    a++;
    console.log(a);
}
let i; 
for(i=0; i<5; i++)
{
    console.log("I (for loop): ",i);
}

i=1;
while(i<5)
{
    
    i++;
    console.log("I (while loop): ",i);
}

do{
    i++;
    console.log("I (do ... while): ",i);
}
while(i<5)

let array=["ABC", "DEF"];
array.forEach((item, index)=>{
    console.log("Index: ",index, "Item: ", item);
})

array.map((item, index)=>{
    console.log("Index: ",index, "Item: ", item);
})
*/