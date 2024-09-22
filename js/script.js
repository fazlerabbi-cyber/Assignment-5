function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value)
}



const donateBtn = document.getElementById('donateBtn')
donateBtn.addEventListener('click', function () {
   
    const inputOne = getInputValueById('input')
    
    document.getElementById('addMoney').innerText = inputOne

    const navMoney = parseFloat(document.getElementById('navMoney').innerText)

    const result = navMoney - inputOne
    document.getElementById('navMoney').innerText = result
    
    
})


const donateBtn2 = document.getElementById('donateBtn2')
donateBtn2.addEventListener('click', function() {

    const inputTwo = getInputValueById('input2')
    document.getElementById('addMoney2').innerText = inputTwo



    const navMoney = parseFloat(document.getElementById('navMoney').innerText)

    const result = navMoney - inputTwo
    document.getElementById('navMoney').innerText = result
})



const donateBtn3 = document.getElementById('donateBtn3')
donateBtn3.addEventListener('click', function() {
    const inputThree = getInputValueById('input3')
    document.getElementById('addMoney3').innerText = inputThree

    const navMoney = parseFloat(document.getElementById('navMoney').innerText)

    const result = navMoney - inputThree
    document.getElementById('navMoney').innerText = result

    
})