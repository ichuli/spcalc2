const cp = document.querySelector('#cp')
const ps = document.querySelector('#ps')
const sp = document.querySelector('#sp')
const rate = document.querySelector('#rate')
const exact = document.querySelector('#exact')
const ubp = document.querySelector('#ubp')


cp.addEventListener('keyup', ()=>{
  exact.innerText = Math.round((cp.value * rate.value)/ps.value)
  ubp.value = cp.value / ps.value
  let xed = Math.ceil((cp.value * rate.value)/ps.value)
  sp.value = Math.ceil(xed/100) * 100
})


rate.addEventListener('change', ()=>{
  ubp.value = cp.value / ps.value
  exact.innerText = (cp.value * rate.value)/ps.value
  let xed = Math.ceil((cp.value * rate.value)/ps.value)
  sp.value = Math.ceil(xed/100) * 100
})

ps.addEventListener('change', ()=>{
  ubp.value = cp.value / ps.value
  exact.innerText = (cp.value * rate.value)/ps.value
  let xed = Math.ceil((cp.value * rate.value)/ps.value)
  sp.value = Math.ceil(xed/100) * 100
})
