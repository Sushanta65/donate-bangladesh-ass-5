    
    
    
      //Donate Section and History Section Switching By Calling showSectingById function.

  document.getElementById('donation-btn').addEventListener('click', function(){
    showSectionById('donation-section')
})

  document.getElementById('donate-history-btn').addEventListener('click', function(){
    showSectionById('history-section')
})

    // Noakhali Flood Donation Section Start Here

    document.getElementById("donate-noakhali-btn").addEventListener("click", function () {

    let accountBalance = parseFloat(document.getElementById("main-balance").innerText);
    let noakhaliDonate = parseFloat(document.getElementById("noakhali-donate-amount").innerText);

    //get the input value
    let donateAmount = getInputValueById('noakhali-donate-input');

    if (!isNaN(donateAmount) && donateAmount > 0 && accountBalance >= donateAmount) {

      const newBalance = accountBalance - donateAmount;
      const donatedAmount = noakhaliDonate + donateAmount;

      document.getElementById("main-balance").innerText = newBalance;
      document.getElementById("noakhali-donate-amount").innerText = donatedAmount;


        //Adding transaction to history section
        const transactionHistory = document.createElement("div");
        const donateTitle = document.getElementById('noakhali-donate-titile').innerText;

        transactionHistory.innerHTML = `
        <div class="w-full border-2 border-gray-300 m-5 p-3 rounded-md">
            <h2 class="text-xl font-bold ">${donateAmount} Taka is donated for ${donateTitle}</h2>
            <small>${new Date()}</small>
        </div>
       `;

        document.getElementById('history-section').appendChild(transactionHistory)

      // Show Modal 
        document.getElementById('my_modal_1').showModal();

    } else {
      alert("Please Enter a valid number.");
    }
  });

      // Noakhali Flood Donation Section End Here


