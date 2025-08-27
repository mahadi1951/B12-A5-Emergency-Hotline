// console.log('mahadi');
// copy counter
let copyCounter = 0;

const copyButtons = document.querySelectorAll(".copyBtn");

copyButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    copyCounter++;
    document.getElementById("copyCount").innerText = copyCounter;
  });
});

// hart counter 
let hartCounter = 0;

const hartButtons = document.querySelectorAll('.hartBtn');

hartButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
        hartCounter++;
        document.getElementById('hartCount').innerText = hartCounter;
    })
})

// coin part
