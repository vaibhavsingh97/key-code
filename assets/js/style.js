document.addEventListener('DOMContentLoaded', function () {
    console.log("App is loaded successfully.\n" + 
    "Please star the repo(https://github.com/vaibhavsingh97/key-code) if you like the project.\n" + 
    "To know more about developer visit: http://www.vaibhavsingh97.com/");
    window.addEventListener('keydown', function (e) {
        document.getElementById('overlay').style.display = 'none';
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        key.classList.add('active');
        document.getElementById('answer').innerHTML = `${e.keyCode}`;
    });

    window.addEventListener('keyup', function (e) {
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        key.classList.remove('active');
    });

    window.addEventListener('mousedown', function(e) {
        document.getElementById('overlay').style.display = 'none';
        const key = document.querySelector(`.key[data-key="${e.srcElement.dataset.key}"]`);
        if (key == null) return;
        key.classList.add('active');
        document.getElementById('answer').innerHTML = `${e.srcElement.dataset.key}`;
    });

    window.addEventListener('mouseup', function(e) {
        const key = document.querySelector(`.key[data-key="${e.srcElement.dataset.key}"]`);
        if (key == null) return;
        key.classList.remove('active');
    });
}, false);
