
function getInput(i){
	      var x=i;
		  if (x=== '='){
			  document.getElementById('input').value=eval(document.getElementById('input').value)
		  }else if(x==='c'){
			document.getElementById('input').value= ' ';  
		  }
		  else{
			  document.getElementById('input').value+=i;
		  }
		  }
 


	
	
