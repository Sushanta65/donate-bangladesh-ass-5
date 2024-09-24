

//Donation Section and History Section Switching Function

function showSectionById(id) {
    document.getElementById("donation-section").classList.add("hidden");
    document.getElementById("history-section").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
  }


// Input Value
function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue)
    return inputValueNumber;
}


//Add to history Section

function addTransactionToHistory(idOfDonateTitle, donateAmount){
  const transactionHistory = document.createElement("div");
        const donateTitle = document.getElementById(idOfDonateTitle).innerText;

        transactionHistory.innerHTML = `
        <div class="w-full border-2 border-gray-300 m-5 p-3 rounded-md">
            <h2 class="text-xl font-bold ">${donateAmount} Taka is ${donateTitle}</h2>
            <small>${new Date()}</small>
        </div>
       `;
        document.getElementById('history-section').appendChild(transactionHistory)
        document.getElementById('no-transaction').classList.add('hidden')
}