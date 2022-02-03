const url = 'https://open.exchangerate-api.com/v6/latest'

const currency1 = document.querySelector('#currency1')
const currency2 = document.querySelector('#currency2')
const amount1 = document.querySelector('#amount1')
const amount2 = document.querySelector('#amount2')
const rateText = document.querySelector('.rate')
const swap = document.querySelector('.swap-btn')

const calculate = async() => {
  const response = await fetch(url)
  const data = await response.json()

  let rate = (data.rates[currency2.value] / data.rates[currency1.value]).toFixed(2)
  rateText.innerText = `1 ${currency1.value} = ${rate} ${currency2.value}`
  amount2.value = (amount1.value * rate).toFixed(2)
}

currency1.addEventListener('change', calculate)
currency2.addEventListener('change', calculate)
amount1.addEventListener('input', calculate)
amount2.addEventListener('input', calculate)
swap.addEventListener('click', () => {
  let temp = currency1.value
  currency1.value = currency2.value
  currency2.value = temp
  calculate()
})

calculate()