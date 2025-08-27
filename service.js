console.log('mahadi');
let copyCounter = 0;
let copyCounterAll = document.getElementById('copyCount')
const copyBtns = document.querySelectorAll('.copyBtn');

copyBtns.forEach(btn =>{
    btn.addEventListener('clink', function(){
        const parentDiv = this.parentElement;
        let number = parentDiv.querySelector('.hotline').innerText;
        navigator.clipboard.writeText(number);
        copyCounter++;
        copyCounterAll.innerText = copyCounter;

        // alart
        alert('Number copied:' + number);
    })
})