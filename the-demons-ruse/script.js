const loginInterval = setInterval(checkLogin, 100);
setTimeout(startFadeIn, 2000)

function startFadeIn() {
    document.getElementById('landing-page-img').style.opacity = 1;
    document.getElementById('landing-page-title').style.opacity = 1;
    setTimeout(startLogin, 4000);
}

function startLogin() {
    document.getElementById('landing-page').style.transform = 'translateY(0)';
    document.getElementById('login-form').style.opacity = 1;
    document.getElementById('login-name').style.cursor = 'text';
}

function checkLogin() {
    const nameInput = document.getElementById('login-name').value;
    if (nameInput) {
        switch (String(nameInput).toLowerCase()) {
            case 'selina':
                clearInterval(loginInterval);
                displayLoader('Selina');
                break;
            case 'david':
                clearInterval(loginInterval);
                displayLoader('David');
                break;
            default:
                break;
        }
    }
}

function displayLoader(name) {
    document.getElementById('welcome-text').innerHTML = `Willkommen, ${name}!`
    document.getElementById('welcome').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('welcome').style.opacity = 1;
        setTimeout(() => {
            document.getElementById('landing-page').style.display = 'none';
            document.getElementById('login-form').style.display = 'none';
            setTimeout(startLoaderAnimation, 1000);
        }, 100);
    }, 10);
}

function startLoaderAnimation() {
    document.getElementById('welcome-text').style.opacity = 1;
}
