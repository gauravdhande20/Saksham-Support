document.getElementById('applyButton').addEventListener('click', function(event){
    event.preventDefault(); 

const state=document.getElementById('states');
const centra=document.getElementById('central')

if(state.checked){
    window.location.href="stateGov.html"
}
else if(centra.checked){
   window.location.href="centralGov.html" 
}
else{
    alert("this not working")
}

})