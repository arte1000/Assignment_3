const character = document.getElementById('character');
const bomb = document.getElementById('bomb');
const bombTwo = document.getElementById('bombTwo');
const goblin = document.getElementById('goblin');
const score = document.getElementById('score');

console.log("Working")
function jump() {
    character.classList.add('jump-animation')
    setTimeout(() => {
        character.classList.remove('jump-animation');
    }, 500);
}

$(document).on("keypress", function (e) {
    if (e.key == " ") {
        jump();
    }
})


setInterval(() => {
    score.innerText++;
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    //bomb 1
    const bombLeft = parseInt(window.getComputedStyle(bomb).getPropertyValue('left'));

    if (bombLeft < 0) {
        bomb.style.display = 'none';
    } else {
        bomb.style.display = '';
    }

    if (bombLeft < 50 && bombLeft > 0 && characterTop > 440) {
        alert("Score: " + score.innerText + "\n\nTry again?");
        location.reload();

    }

    //Doc Ock Arms
    const bombTwoLeft = parseInt(window.getComputedStyle(bombTwo).getPropertyValue('left'));

    if (bombTwoLeft < 0) {
        bombTwo.style.display = 'none';
    } else {
        bombTwo.style.display = '';
    }

    if (bombTwoLeft < 120 && bombTwoLeft > 0 && characterTop > 440) {
        alert("Score: " + score.innerText + "\n\nTry again?");
        location.reload()        
    }

}, 50);