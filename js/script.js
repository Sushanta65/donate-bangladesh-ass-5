    
    
    
      //Donate Section and History Section Switching By Calling showSectingById function.

  document.getElementById('donation-btn').addEventListener('click', function(){

    //function
    showSectionById('donation-section')
    document.getElementById('donation-btn').classList.add('active')
    document.getElementById('donate-history-btn').classList.remove('active')

  })


  document.getElementById('donate-history-btn').addEventListener('click', function(){

    //function
    showSectionById('history-section')
    document.getElementById('donate-history-btn').classList.add('active')
    document.getElementById('donation-btn').classList.remove('active')

  })


    // Noakhali Flood Donation Section Start Here

    document.getElementById("donate-noakhali-btn").addEventListener("click", function () {

    let accountBalance = parseFloat(document.getElementById("main-balance").innerText);
    let noakhaliDonatedAmount = parseFloat(document.getElementById("noakhali-donate-amount").innerText);

    //get the input value
    let donateAmount = getInputValueById('noakhali-donate-input');

    if (!isNaN(donateAmount) && donateAmount > 0 && accountBalance >= donateAmount) {

      const newBalance = accountBalance - donateAmount;
      const donatedAmount = noakhaliDonatedAmount + donateAmount;

      document.getElementById("main-balance").innerText = newBalance;
      document.getElementById("noakhali-donate-amount").innerText = donatedAmount;


        //Adding transaction to history section by calling a common function
        addTransactionToHistory('noakhali-donate-title', donateAmount)

      // Show Modal 
        document.getElementById('my_modal_1').showModal();
        document.getElementById('noakhali-donated-confirm').innerText = donateAmount;

    } else {
      alert("Please Enter a valid number.");
    }
  });

      // Noakhali Flood Donation Section End Here

      // Feni Flood Donation Section Start Here

        document.getElementById('donate-feni-btn').addEventListener('click', function(){
          let accountBalance = parseFloat(document.getElementById("main-balance").innerText);
          let feniDonatedAmount = parseFloat(document.getElementById("feni-donate-amount").innerText);

          let donateAmount = getInputValueById('feni-donate-input');


          if (!isNaN(donateAmount) && donateAmount > 0 && accountBalance >= donateAmount) {

            const newBalance = accountBalance - donateAmount;
            const donatedAmount = feniDonatedAmount + donateAmount;
      
            document.getElementById("main-balance").innerText = newBalance;
            document.getElementById("feni-donate-amount").innerText = donatedAmount;
      
      
              //Adding transaction to history section by calling a common function
              addTransactionToHistory('feni-donate-title', donateAmount)
      
            // Show Modal 
              document.getElementById('my_modal_2').showModal();
              document.getElementById('feni-donated-confirm').innerText = donateAmount;
      
          } else {
            alert("Please Enter a valid number.");
          }


        })
      // Feni Flood Donation Section End Here

      //Quata Movement aid donation section start here

      document.getElementById('donate-quata-movement-btn').addEventListener('click', function(){
        let accountBalance = parseFloat(document.getElementById("main-balance").innerText);
        let feniDonatedAmount = parseFloat(document.getElementById("quata-movement-donate-amount").innerText);

        let donateAmount = getInputValueById('quata-movement-donate-input');


        if (!isNaN(donateAmount) && donateAmount > 0 && accountBalance >= donateAmount) {

          const newBalance = accountBalance - donateAmount;
          const donatedAmount = feniDonatedAmount + donateAmount;
    
          document.getElementById("main-balance").innerText = newBalance;
          document.getElementById("quata-movement-donate-amount").innerText = donatedAmount;
    
    
            //Adding transaction to history section by calling a common function
            addTransactionToHistory('quata-movement-donate-title', donateAmount)
    
          // Show Modal 
            document.getElementById('my_modal_3').showModal();
            document.getElementById('quata-movement-donated-confirm').innerText = donateAmount;
    
        } else {
          alert("Please Enter a valid number.");
        }


      })

      //Quata Movement aid donation section end here
      
