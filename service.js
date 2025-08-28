// hart counter 
let hartCounter = 0;

const hartButtons = document.querySelectorAll('.hartBtn');

hartButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
        hartCounter++;
        document.getElementById('hartCount').innerText = hartCounter;
    })
})

let copyCounter = 0;

const copyButtons = document.querySelectorAll(".copyBtn");

copyButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = this.closest(".p-8");

    const numberElement = card.querySelector(".show-number");

    if (numberElement) {
      const hotlineNumber = numberElement.innerText.trim(); 

    
      navigator.clipboard.writeText(hotlineNumber)
        .then(() => {
      
          alert(`Copy Number is: "${hotlineNumber}"`);

          // copy counter update
          copyCounter++;
          document.getElementById("copyCount").innerText = copyCounter;
        });
        
    } else {
      alert("Number খুঁজে পাওয়া যায়নি!");
    }
  });
});


// coin part

const coinCountEl = document.getElementById('coinCount');
let coins = parseInt(coinCountEl.textContent);

// Call History container
const callHistoryContainer = document.getElementById('callHistoryContainer');

const callButtons = document.querySelectorAll('.callBtn');

callButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.p-8');
    const serviceName = card.querySelector('h1').textContent;
    const serviceNumber = card.querySelector('p.font-bold').textContent;

    // Check coins
    if (coins < 20) {
      alert("You don't have enough coins to make a call! Minimum 20 coins needed");
      return;
    }
    coins -= 20;
    coinCountEl.textContent = coins;

    // Alert call
    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    const now = new Date();
    const timeString = now.toLocaleTimeString();

    //  call history
    const historyItem = document.createElement('div');
    historyItem.className = 'flex justify-between p-2 border-b border-gray-200 bg-[#fafafa] shadow items-center rounded-2xl m-2 ';
    historyItem.innerHTML = `
    <div class ='flex flex-col '>
      <span class ='font-semibold'>${serviceName}</span>
      <span>${serviceNumber}</span>
      </div>
      <div class = 'text-sm text-gray-500 mt-1'>
      ${timeString}
      </div>
    `;
    
    callHistoryContainer.prepend(historyItem);

    const clearButton = document.getElementById('clearBtn');
    clearButton.addEventListener('click', () => {
      callHistoryContainer.innerHTML = '';
    })
  });
});
