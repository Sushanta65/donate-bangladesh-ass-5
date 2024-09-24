  // Donation and History Section Switching 
  document.getElementById('donation-btn').addEventListener('click', function(){
    
    showSectionById('donation-section')
    document.getElementById('donation-btn').classList.add('active')
    document.getElementById('donate-history-btn').classList.remove('active')

  })

  document.getElementById('donate-history-btn').addEventListener('click', function(){
    
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
        
        calculateDonationAmount(noakhaliDonatedAmount, donateAmount, accountBalance, 'noakhali-donate-amount')
        
        addTransactionToHistory('noakhali-donate-title', donateAmount)

      // Show Modal 
        document.getElementById('my_modal_1').showModal();
        document.getElementById('noakhali-donated-confirm').innerText = donateAmount;

    } else {
      alert("Please Enter a Valid Number. :)");
    }
  });

      // Noakhali Flood Donation Section End Here

      // Feni Flood Donation Section Start Here

        document.getElementById('donate-feni-btn').addEventListener('click', function(){
          let accountBalance = parseFloat(document.getElementById("main-balance").innerText);
          let feniDonatedAmount = parseFloat(document.getElementById("feni-donate-amount").innerText);
          let donateAmount = getInputValueById('feni-donate-input');

          if (!isNaN(donateAmount) && donateAmount > 0 && accountBalance >= donateAmount) {

              calculateDonationAmount(feniDonatedAmount, donateAmount, accountBalance, 'feni-donate-amount')

              addTransactionToHistory('feni-donate-title', donateAmount)
      
            // Show Modal 
              document.getElementById('my_modal_2').showModal();
              document.getElementById('feni-donated-confirm').innerText = donateAmount;
      
          } else {
            alert("Please Enter a Valid Number. :)");
          }


        })
      // Feni Flood Donation Section End Here



      //Quata Movement aid donation section start here

      document.getElementById('donate-quata-movement-btn').addEventListener('click', function(){
        let accountBalance = parseFloat(document.getElementById("main-balance").innerText);
        let quataMovementDonateAmount = parseFloat(document.getElementById("quata-movement-donate-amount").innerText);

        let donateAmount = getInputValueById('quata-movement-donate-input');


        if (!isNaN(donateAmount) && donateAmount > 0 && accountBalance >= donateAmount) {

            calculateDonationAmount(quataMovementDonateAmount, donateAmount, accountBalance, 'quata-movement-donate-amount')
    
            addTransactionToHistory('quata-movement-donate-title', donateAmount)
    
          // Show Modal 
            document.getElementById('my_modal_3').showModal();
            document.getElementById('quata-movement-donated-confirm').innerText = donateAmount;
    
        } else {
          alert("Please Enter a Valid Number. :)");
        }


      })

      //Quata Movement aid donation section end here
      
