const loginInterval = setInterval(checkLogin, 100);
setTimeout(startLogin, 3000);

function startLogin() {
    document.getElementById('welcome-img').style.transform = 'translateY(0)';
    document.getElementById('login-form').style.opacity = 1;
}

function checkLogin() {
    const nameInput = document.getElementById('login-name').value;
    if (nameInput) {
        switch (nameInput) {
            case 'Selina':
                clearInterval(loginInterval);
                startLoader();
                break;
            default:
                break;
        }
    }
}

function startLoader() {
    document.getElementById('welcome-img').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';

    document.getElementById('loader').style.display = 'flex';
    setTimeout(startLoaderAnimation, 1000);
}

function startLoaderAnimation() {
    document.getElementById('loading').style.opacity = 1;
}
