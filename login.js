
function login()
{
    if(   document.getElementById("userName").value == "user@gmail.com"
       && document.getElementById("password").value == "123456" )
    {
        
        window.location="dashboard.html";

    }
    else
    {
        alert( "invalid userName and password" );
        
    }
}