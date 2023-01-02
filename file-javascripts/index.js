let conditionLogin = JSON.parse(localStorage.getItem('conditionLogin'));
if(conditionLogin) {
    let loginUser = JSON.parse(localStorage.getItem('LoginUser'));
    const nameUserNode = document.querySelector('.info-user .name-user');
    if(loginUser.name === '') nameUserNode.textContent = `${loginUser.user}`;
    else nameUserNode.textContent = `${loginUser.name}`;
    const changeNameNode = document.querySelector('.change-name');
    changeNameNode.addEventListener('click',()=>{
        const inputNameNode = document.querySelector('.input-name');
        nameUserNode.classList.add('hidden');
        inputNameNode.classList.remove('hidden');
        inputNameNode.addEventListener('keypress',(event) => {
            if(event.keyCode === 13){
                loginUser.name = event.target.value;
                localStorage.setItem('LoginUser',JSON.stringify(loginUser));
                nameUserNode.classList.remove('hidden');
                inputNameNode.classList.add('hidden');
                nameUserNode.textContent = `${loginUser.name}`;
            }
        })
    })
    const logOutNode = document.querySelector('.log-out');
    logOutNode.addEventListener('click',()=>{
        conditionLogin = false;
        loginUser = null;
        localStorage.setItem('conditionLogin',JSON.stringify(conditionLogin));
        localStorage.setItem('LoginUser',JSON.stringify(loginUser));
        window.location = `login.html`;
    })
    const playVideo = document.querySelector('.cc1');
    const functions = document.querySelectorAll('.body-content > div');
    functions[0].addEventListener('click',()=>{window.location=`GPTB1.html`;});
    functions[1].addEventListener('click',()=>{window.location=`GPTB2.html`;});
    functions[2].addEventListener('click',()=>{window.location=`GPTB3.html`;});
    functions[3].addEventListener('click',()=>{window.location=`GHPTB12A.html`;});
    functions[4].addEventListener('click',()=>{window.location=`GHPTB13A.html`;});
    functions[5].addEventListener('click',()=>{window.location=`FindNextDay.html`;});
    functions[6].addEventListener('click',()=>{window.location=`CheckMarriageAge.html`;});
    functions[7].addEventListener('click',()=>{window.location=`CheckRankedAcademic.html`;});
    functions[8].addEventListener('click',()=>{
        playVideo.classList.remove('hidden');
        playVideo.children[0].play();
        setTimeout(()=>{
            playVideo.classList.add('hidden');
        },13000);
    });
}
else {
    window.location = `login.html`;
}