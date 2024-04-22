function login()
{
    var em=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    if(em=='admin@gmail.com' && pass=='admin123')
    {
        Swal.fire({
            title: "Thanks",
            text: "You are Logged in successfully",
            icon: "success"
          });
          window.location='dashboard.html';
    }
    else 
    {

        Swal.fire({
            title: "Opps!",
            text: "Your eamil and password are incorrect try again",
            icon: "error"
          });
         
    }
}

// create a logout function 
function logout()
{
   
    Swal.fire({
        title: "Success!",
        text: "You are Logout successfully",
        icon: "success"
      }); 
      window.location='index.html';
}