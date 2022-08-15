
function CheckPassword(){   
	var passw = "2013";  
	var pasCode = document.getElementById("pas");
	if((pasCode.value.match(/2013/g) != null) && pasCode.value.match(/2013/g)[0] == passw){   
		window.location.href = "TKLI-Time-Zones.html";
	}  
	else{   
		alert('Wrong...!')  
		return false;  
	}  
} 
