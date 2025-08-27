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
// Select counters
const coinCountEl = document.getElementById('coinCount');
let coins = parseInt(coinCountEl.textContent);

// Call History container
const callHistoryContainer = document.getElementById('callHistoryContainer');

// Select all call buttons
const callButtons = document.querySelectorAll('.callBtn');

callButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the card container
    const card = button.closest('.p-8');
    const serviceName = card.querySelector('h1').textContent;
    const serviceNumber = card.querySelector('p.font-bold').textContent;

    // Check coins
    if (coins < 20) {
      alert("You don't have enough coins to make a call!");
      return;
    }

    // Deduct coins
    coins -= 20;
    coinCountEl.textContent = coins;

    // Alert the call
    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    // Add to call history
    const historyItem = document.createElement('div');
    historyItem.className = 'flex justify-between p-2 border-b border-gray-200';
    historyItem.innerHTML = `
      <span>${serviceName}</span>
      <span>${serviceNumber}</span>
    `;
    // Prepend so latest call shows on top
    callHistoryContainer.prepend(historyItem);
  });
});
