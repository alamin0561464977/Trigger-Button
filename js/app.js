const btn = document.getElementById("submitButton");
const inputField = document.getElementById("input-field");

inputField.addEventListener("keypress", function (event) {
    if (event.key == 'Enter')
        btn.click();
});

btn.addEventListener('click', function () {
    const inputValue = inputField.value;
    inputField.value = '';
    if (inputValue === 'alamin') {
        const section = document.getElementById('section');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="search-field">
            <img src="images/alamin.jpg" alt="alamin.jpg">
        </div>
    `;
        section.appendChild(div)
    }
});