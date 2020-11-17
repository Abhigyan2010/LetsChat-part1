function Add_user(){
    Name=document.getElementById("Name-input").value;
    Password=document.getElementById("Password").value;
    localStorage.setItem("Name",Name);
    localStorage.setItem("Password",Password);
    window.location("room.html");
}