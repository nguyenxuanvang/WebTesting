const inputNodes = document.querySelectorAll('input');
const kqNode = document.querySelector('.btn-kq');
const resetNode = document.querySelector('.btn-reset');
const noticeNode = document.querySelector('.notice');
const resultNoticeNode = document.querySelector('.result-notice');
let a,b,c;
kqNode.addEventListener('click',() => {
    if(inputNodes[0].value === '' || inputNodes[1].value === '' || inputNodes[2].value === '') {
        resultNoticeNode.classList.remove('hidden');
        resultNoticeNode.textContent = `Input Not Null`;
    }
    else {
        a = inputNodes[0].value;
        b = inputNodes[1].value;
        c = inputNodes[2].value;
        let delta = b*b - 4*a*c;
        if(b >= 0)
            if(c >= 0)
                noticeNode.textContent = `${a}x²+${b}x+${c} = 0`;
            else
                noticeNode.textContent = `${a}x²+${b}x${c} = 0`;
        else
            if(c >= 0)
                noticeNode.textContent = `${a}x²${b}x+${c} = 0`;
            else
            noticeNode.textContent = `${a}x²${b}x${c} = 0`;
        noticeNode.classList.remove('hidden');
        if(delta < 0) {
            resultNoticeNode.textContent = `Phương trình vô nghiệm`;
            resultNoticeNode.classList.remove('hidden');
        }
        else
            if(delta === 0) {
                resultNoticeNode.textContent = `X₁ = X₂ = ${(-b/(2*a)).toFixed(2)}`;
                resultNoticeNode.classList.remove('hidden');
            }
            else {
                resultNoticeNode.textContent = `X₁ = ${((-b+Math.sqrt(delta))/(2*a)).toFixed(2)}, X₂ = ${((-b-Math.sqrt(delta))/(2*a)).toFixed(2)}`;
                resultNoticeNode.classList.remove('hidden');
            }
    }     
});
resetNode.addEventListener('click',() => {
    inputNodes[0].value = '';
    inputNodes[1].value = '';
    inputNodes[2].value = '';
    noticeNode.classList.add('hidden');
    resultNoticeNode.classList.add('hidden');
});