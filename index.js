const url = 'https://open.exchangerate-api.com/v6/latest'

const currency1 = document.querySelector('#currency1')
const currency2 = document.querySelector('#currency2')
const amount1 = document.querySelector('#amount1')
const amount2 = document.querySelector('#amount2')
const rateText = document.querySelector('.rate')
const swap = document.querySelector('.swap-btn')

function calculate() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency2.value] / data.rates[currency1.value]
      rateText.innerText = `1 ${currency1.value} = ${currency2.value}`
      amount2.value = (amount1.value * rate).toFixed(2)
    })
}

amount1.addEventListener('input', calculate)
amount2.addEventListener('input', calculate)
currency1.addEventListener('change', calculate)
currency2.addEventListener('change', calculate)
swap.addEventListener('click', () => {
  let temp = currency1.value
  currency1.value = currency2.value
  currency2.value = temp
  calculate()
})

calculate()