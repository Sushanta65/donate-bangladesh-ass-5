

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