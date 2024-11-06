const cp = document.querySelector('#cp')
const ps = document.querySelector('#ps')
const sp = document.querySelector('#sp')
const rate = document.querySelector('#rate')
const exact = document.querySelector('#exact')

cp.addEventListener('keyup', ()=>{
  exact.innerText = (cp.value * rate.value)/ps.value
  let xed = Math.ceil((cp.value * rate.value)/ps.value)
  sp.value = Math.ceil(xed/100) * 100
})

rate.addEventListener('change', ()=>{
  exact.innerText = (cp.value * rate.value)/ps.value
  let xed = Math.ceil((cp.value * rate.value)/ps.value)
  sp.value = Math.ceil(xed/100) * 100
})

ps.addEventListener('change', ()=>{
  exact.innerText = (cp.value * rate.value)/ps.value
  let xed = Math.ceil((cp.value * rate.value)/ps.value)
  sp.value = Math.ceil(xed/100) * 100
})
