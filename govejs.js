document.getElementById('applyButton').addEventListener('click',function() {
    var isStateChecked = document.getElementById('stateCheckbox').checked;
    
    if (isStateChecked) {
        // Redirect to the state page
        window.location.href = 'stateGov.html';
    }


});