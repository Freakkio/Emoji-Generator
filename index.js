const btnEl = document.getElementById('btn');
const emojiEl = document.getElementById('emoji-name');

const emoji = [];

 async function addEmoji(){
        let response = await fetch("https://emoji-api.com/emojis?access_key=9ed17787cecf9b1cb9d19faa0841f0baf15ec156")
        data = await response.json();

        for(let i = 0; i < 1500; i++){
            emoji.push({
                name: data[i].character,
                unicode: data[i].unicodeName,
            })

    }}


addEmoji();


btnEl.addEventListener('click', () => {
    const random = Math.floor(Math.random() * emoji.length);

    btnEl.innerText = emoji[random].name;
    emojiEl.innerText = emoji[random].unicode;
})