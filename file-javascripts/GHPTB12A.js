const inputNodes = document.querySelectorAll('input');
const kqNode = document.querySelector('.btn-kq');
const resetNode = document.querySelector('.btn-reset');
const noticeNodes = document.querySelectorAll('.notice');
const resultNoticeNode = document.querySelector('.result-notice');
const characterNode = document.querySelector('.character2');
let a,b,c,d,e,f,x,y;
kqNode.addEventListener('click',() => {
    if(inputNodes[0].value === '' || inputNodes[1].value === '' || inputNodes[2].value === '' || inputNodes[3].value === ''|| inputNodes[4].value === '' || inputNodes[5].value === '') {
        resultNoticeNode.classList.remove('hidden');
        resultNoticeNode.textContent = `Input Not Null`;
    }
    else {
        a = inputNodes[0].value;
        b = inputNodes[1].value;
        c = inputNodes[2].value;
        d = inputNodes[3].value;
        e = inputNodes[4].value;
        f = inputNodes[5].value;
        if(b >= 0) 
            noticeNodes[0].textContent = `${a}x+${b}y= ${c}`;
        else
            noticeNodes[0].textContent = `${a}x${b}= ${c}`;
        if(e >= 0)
            noticeNodes[1].textContent = `${d}x+${e}y= ${f}`;
        else
            noticeNodes[1].textContent = `${d}x${e}= ${f}`;
        noticeNodes[0].classList.remove('hidden');
        noticeNodes[1].classList.remove('hidden');
        characterNode.classList.remove('hidden');
        let D = a * e - d * b;
        let Dx = c * e - f * b;
        let Dy = a * f - d * c;
        if(D !== 0) {
            x = Dx / D;
            y = Dy / D;
            resultNoticeNode.textContent = `Hệ phương trình có một cặp nghiệm duy nhất: x = ${x}, y = ${y}`;
            resultNoticeNode.classList.remove('hidden');
        }
        else {
            if(Dx !== 0 || Dy !== 0) {
                resultNoticeNode.textContent = `Hệ Phương trình vô nghiệm`;
                resultNoticeNode.classList.remove('hidden');
            }
            else {
                resultNoticeNode.textContent = `Hệ phương trình vô số nghiệm`;
                resultNoticeNode.classList.remove('hidden');
            }
        }
    }     
});
resetNode.addEventListener('click',() => {
    inputNodes[0].value = '';
    inputNodes[1].value = '';
    inputNodes[2].value = '';
    inputNodes[3].value = '';
    inputNodes[4].value = '';
    inputNodes[5].value = '';
    noticeNodes[0].classList.add('hidden');
    noticeNodes[1].classList.add('hidden');
    resultNoticeNode.classList.add('hidden');
    characterNode.classList.add('hidden');
});