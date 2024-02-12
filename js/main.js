fetchAdviceData()
let btn = document.querySelector(".dice-btn")
btn.addEventListener('click', fetchAdviceData)





function fetchAdviceData(){
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('.number').innerText = data.slip.id
        document.querySelector('.advice-text').innerText = data.slip.advice
    })
    .catch(err => console.log(err)) 
}
