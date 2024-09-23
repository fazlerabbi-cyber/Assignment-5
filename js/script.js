function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value)
}





const donateBtn = document.getElementById('donateBtn1')
donateBtn.addEventListener('click', function () {
   
    
   
    const inputOne = getInputValueById('inputOne')
    
    document.getElementById('addMoney').innerText = inputOne

    const navMoney = parseFloat(document.getElementById('navMoney').innerText)

    const result = navMoney - inputOne
 
    
    document.getElementById('navMoney').innerText = result



    if(inputOne <= 0 || isNaN(inputOne)) {
        alert('Valid Donate Amount')
    }
    
    
})


const donateBtn2 = document.getElementById('donateBtn2')
donateBtn2.addEventListener('click', function() {

    const inputTwo = getInputValueById('input2')
    document.getElementById('addMoney2').innerText = inputTwo



    const navMoney = parseFloat(document.getElementById('navMoney').innerText)

    const result = navMoney - inputTwo
    document.getElementById('navMoney').innerText = result

    if(inputTwo <= 0 || isNaN(inputTwo)) {
        alert('Valid Donate Amount')
    }
    
})



const donateBtn3 = document.getElementById('donateBtn3')
donateBtn3.addEventListener('click', function() {
    const inputThree = getInputValueById('input3')
    document.getElementById('addMoney3').innerText = inputThree

    const navMoney = parseFloat(document.getElementById('navMoney').innerText)

    const result = navMoney - inputThree
    document.getElementById('navMoney').innerText = result


    if(inputThree <= 0 || isNaN(inputThree)) {
        alert('Valid Donate Amount')
    }
    
    
})


// history btn btn-primary

const history = document.getElementById('historyBtn')
const  donate = document.getElementById('donateBtn')

history.addEventListener('click', function() {
 history.classList.add("btn", "btn-primary")







 history.classList.remove("text-gray-600")  
 donate.classList.remove("btn", "btn-normal")


// donate 


    donate.classList.add('text-gray-600')



document.getElementById("main-section").classList.add('hidden')
document.getElementById('historyBtn').classList.remove('hidden')




})

    










// 2 button alter 

  donate.addEventListener('click', function () {
    donate.classList.add("btn", "btn-primary")

    history.classList.remove("btn", "btn-normal")

    document.getElementById('main-section').classList.remove('hidden')
    document.getElementById("historyBtn").classList.remove('hidden')
  })


  document.getElementById('blogBtn').addEventListener('click', function () {
    window.location.href = '/home.html'
    
  })