document.addEventListener('DOMContentLoaded', function() {
    var resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', function() {
        var inputs = document.querySelectorAll('#mealTable input[type="text"]');
        inputs.forEach(function(input) {
            input.value = ''; 
        });
    });
});
