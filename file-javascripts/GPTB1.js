const inputNodes = document.querySelectorAll('input');
const kqNode = document.querySelector('.btn-kq');
const resetNode = document.querySelector('.btn-reset');
const noticeNode = document.querySelector('.notice');
const resultNoticeNode = document.querySelector('.result-notice');
let a,b;
kqNode.addEventListener('click',() => {
    if(inputNodes[0].value === '' || inputNodes[1].value === '') {
        resultNoticeNode.classList.remove('hidden');
        resultNoticeNode.textContent = `Input Not Null`;
    }
    else {
        a = inputNodes[0].value;
        b = inputNodes[1].value;
        if(b >= 0)
            noticeNode.textContent = `${a}x+${b} = 0`;
        else
            noticeNode.textContent = `${a}x${b} = 0`;
        noticeNode.classList.remove('hidden');
        resultNoticeNode.textContent = `X = ${-b/a}`;
        resultNoticeNode.classList.remove('hidden');
    }     
});
resetNode.addEventListener('click',() => {
    inputNodes[0].value = '';
    inputNodes[1].value = '';
    noticeNode.classList.add('hidden');
    resultNoticeNode.classList.add('hidden');
});