

document.getElementById('donate-noakhali-btn').addEventListener('click', function(event){
    let accountBalance = parseFloat(document.getElementById('main-balance').innerText)
    let noakhaliDonate = parseFloat(document.getElementById('noakhali-donate-amount').innerText)




    //get the input value
    let donateAmount = parseFloat(document.getElementById('noakhali-donate-input').value)

    if(!isNaN(donateAmount) && donateAmount > 0 && accountBalance > donateAmount){
        // document.getElementById('donate-noakhali-btn').setAttribute('onclick', 'my_modal_1.showModal()')
       const newBalance = accountBalance - donateAmount;
       const donatedAmount = noakhaliDonate + donateAmount;

       document.getElementById('main-balance').innerText = newBalance;
       document.getElementById('noakhali-donate-amount').innerText = donatedAmount;

       
        
    }else{
        // document.getElementById('donate-noakhali-btn').removeAttribute('onclick')
        alert("Please Enter a valid number.")
        
        
    }
})


