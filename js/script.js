function getInputValueById(id) {
    const inputValue = parseFloat(document.getElementById(id).value)
    return inputValue
}
const historySection = document.getElementById('history-section')
const donateBtn = document.getElementById('donateBtn1')
donateBtn.addEventListener('click', function () {
   
    
   
    const inputOne = getInputValueById('inputOne')
    const inputFastValue = document.getElementById('addMoney').innerText
    const addMoney = parseFloat(inputFastValue)
     const noakhaliMoney = inputOne + addMoney;
    document.getElementById('addMoney').innerText= noakhaliMoney


    document.getElementById('donateOne').innerText = inputOne
    const navMoney = parseFloat(document.getElementById('navMoney').innerText)
 

    const result = navMoney - inputOne
    document.getElementById('navMoney').innerText = result



    if(inputOne <= 0 || isNaN(inputOne)) {
        alert('Valid Donate Amount')
    }
    
    
})

// 2nd card 
const donateBtn2 = document.getElementById('donateBtn2')
donateBtn2.addEventListener('click', function() {

    const input2 = getInputValueById('input2')
    const inputFastValue = document.getElementById('addMoney2').innerText
    const addMoney2 = parseFloat(inputFastValue)
     const noakhaliMoney = input2 + addMoney2;
    document.getElementById('addMoney2').innerText= noakhaliMoney

    document.getElementById('donateTwo').innerText = inputOne
    const navMoney = parseFloat(document.getElementById('navMoney').innerText)
 

    const result = navMoney - input2
    document.getElementById('navMoney').innerText = result



    if(inputTwo <= 0 || isNaN(input2)) {
        alert('Valid Donate Amount')
    }

 
    
})

// 3rd 
const donateBtn3 = document.getElementById('donateBtn3')
donateBtn3.addEventListener('click', function() {

    const input3 = getInputValueById('input3')
    const inputFastValue = document.getElementById('addMoney3').innerText
    const addMoney3 = parseFloat(inputFastValue)
     const noakhaliMoney = input3 + addMoney3;
    document.getElementById('addMoney3').innerText= noakhaliMoney

    document.getElementById('donateThree').innerText = input3
    const navMoney = parseFloat(document.getElementById('navMoney').innerText)
 

    const result = navMoney - input3
    document.getElementById('navMoney').innerText = result



    if(inputThree <= 0 || isNaN(input3)) {
        alert('Valid Donate Amount')
    }

    
})



// history btn btn-primary

const history = document.getElementById('historyBtn')
const  donate = document.getElementById('donateBtn')

history.addEventListener('click', function() {
 history.classList.add("btn", "btn-primary")


 donate.classList.remove("btn", "btn-primary")

document.getElementById('div-container').classList.add('hidden')
document.getElementById('history-section').classList.remove('hidden')

})
// 2 button alter 

  donate.addEventListener('click', function () {
    donate.classList.add("btn", "btn-primary")

    history.classList.remove("btn", "btn-normal")

    document.getElementById('div-container').classList.remove('hidden')
document.getElementById('history-section').classList.add('hidden')

   
  })


  document.getElementById('blogBtn').addEventListener('click', function () {
    window.location.href = './home.html'
    
  })

