document.addEventListener('DOMContentLoaded', function() {
    const recipeInput = document.getElementById('recipe-input');
    const recipeList = document.getElementById('recipe-list');
    const submitBtn = document.getElementById('submit-btn');
    const clearBtn = document.getElementById('clear-btn');

    submitBtn.addEventListener('click', function() {
        parseAndDisplayList();
    });

    recipeList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('checked');
        }
    });

    clearBtn.addEventListener('click', function() {
        recipeList.innerHTML = '';
    });

    function parseAndDisplayList() {
        const inputText = recipeInput.value.trim();
        const sentences = inputText.split(/[.!?]/).map(sentence => sentence.trim()).filter(sentence => sentence !== '');

        recipeList.innerHTML = '';

        sentences.forEach(sentence => {
            const li = document.createElement('li');
            li.textContent = sentence;
            recipeList.appendChild(li);
        });

        recipeInput.value = '';
    }
});
