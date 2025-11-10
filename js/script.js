document.getElementById('copyright').innerHTML = '© 2020-' + new Date().getFullYear() + ' screetox.de';

let emotes = ['facepalm', 'lol', 'notlikethis', 'pog', 'shock'];
let images = document.getElementsByClassName('website-logo');
for (var i = 0; i < images.length; i++){
    let index = Math.floor(Math.random() * emotes.length);
    images[i].src = images[i].src.slice(0, -7) + emotes[index] + '.png';
    emotes.splice(index, 1);
}
