
function Collect_Data(){

    let userName = document.getElementById("userName").value;
    let count = 3;
    console.log(userName);
    if(userName == ""){
        alert("User Name Can not be Empty");
    }
    else if(userName != "AIUB"){
       document.getElementById("NameError").innerHTML ="Incorrect User Name";
       
    }
    


    let UserPass = document.getElementById("UserPassword").value;
    console.log(UserPass);

    if(UserPass == ""){
        alert("User Password Can not be Empty");
    }
    else if(UserPass != "$_student"){
        document.getElementById("PassError").innerHTML ="Incorrect Password Name";
    }

    if(userName == "AIUB" && UserPass == "$_student" ){
       document.getElementById("Compelte").innerHTML ="Successfully Logged In";
    }

    if(userName != "AIUB" || UserPass != "$_student" ){
       console.log(count);
       alert("You Have "+ count +" attempts left");
       count = count - 1;
       console.log(count);
       if(count <=0){
        alert("Your are Locked for 5 minutes");
       }  
    }
    
    return false;

   

}