//your JS code here. If required.
const btn = document.getElementById("btn");
btn.addEventListener('click',()=>{

	const name = document.getElementById("name").value.trim();
	const age = document.getElementById("age").value.trim();

	if(name==="" || age===""){
		alert("Please enter valid details.")
	}
	else{
		if(age >= 18){
			setTimeOut(4000,()=>{
				alert(`Welcome, ${name}. You can vote.`)
			})
		}
		else{
			setTimeOut(4000,()=>{
				alert(`"Oh sorry ${name}. You aren't old enough.`)
			}
		}
	}
	
})
