const inputNodes = document.querySelectorAll('input');
const btnFnd = document.querySelector('button');
const noticeNode = document.querySelector('.notice');
let day,month,year;
let check = function(d,m,y) {
    let isValid = false;
    if(d > 0 && d < 32 && m > 0 && m < 13 && y > 0)
        isValid = true;
    return isValid;
}
btnFnd.addEventListener('click',() => {
    day = inputNodes[0].value;
    month = inputNodes[1].value;
    year = inputNodes[2].value;
    if(check(day,month,year) === true) {
        noticeNode.children[0].textContent = `Day: ${Number(day)+1} Month: ${month} Year: ${year}`;
    }
    else {
        noticeNode.children[0].textContent = `Input Error`;
    }
    noticeNode.classList.remove('hidden');
    inputNodes.forEach(item => {
        item.value = '';
    });
});