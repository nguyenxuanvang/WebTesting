const audioNode = document.querySelector('audio');
const bodyNode = document.querySelector('body');
bodyNode.onmouseover = function () {
    audioNode.play();
}