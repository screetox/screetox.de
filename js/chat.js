const input = document.getElementById('channel-input');
const chatFrame = document.getElementById('chat-frame');
const h1 = document.getElementById('h1');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('btn').click();
    }
});

changeChatChannel = () => {
    const channel = input.value.toLowerCase();
    chatFrame.setAttribute('src', `https://www.twitch.tv/embed/${channel}/chat?parent=screetox.de&parent=localhost&darkpopout`);
    h1.innerHTML = `Chat von ${channel}:`;
    input.value = '';
    input.blur();
};
