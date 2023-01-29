const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
button.addEventListener("click", add)
form.addEventListener("change", save)
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }
  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}
function save() {
  console.log(nlwSetup.data)
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

/*(const data = {
  academia: [
    "01-20",
    "01-21",
    "01-22",
    "01-23",
    "01-24",
    "01-25",
    "01-26",
    "01-27",
    "01-28",
    "01-29",

    "01-30",
    "01-31",
  ],
  correr: [
    "01-20",
    "01-21",
    "01-22",
    "01-23",
    "01-24",
    "01-25",
    "01-26",
    "01-27",
    "01-28",
    "01-29",
    "01-30",
    "01-31",
  ],
  fruta: [
    "01-20",
    "01-21",
    "01-22",
    "01-23",
    "01-24",
    "01-25",
    "01-26",
    "01-27",
    "01-28",
    "01-29",
    "01-30",
    "01-31",
  ],
  lixo: [
    "01-20",
    "01-21",
    "01-22",
    "01-23",
    "01-24",
    "01-25",
    "01-26",
    "01-27",
    "01-28",
    "01-29",
    "01-30",
    "01-31",
  ],
  estudar: [
    "01-20",
    "01-21",
    "01-22",
    "01-23",
    "01-24",
    "01-25",
    "01-26",
    "01-27",
    "01-28",
    "01-29",
    "01-30",
    "01-31",
  ],
  rezar: [
    "01-20",
    "01-21",
    "01-22",
    "01-23",
    "01-24",
    "01-25",
    "01-26",
    "01-27",
    "01-28",
    "01-29",
    "01-30",
    "01-31",
  ],
  caminhar: [
    "01-20",
    "01-21",
    "01-22",
    "01-23",
    "01-24",
    "01-25",
    "01-26",
    "01-27",
    "01-28",
    "01-29",
    "01-30",
    "01-31",
  ],
  rock: [
    "01-20",
    "01-21",
    "01-22",
    "01-23",
    "01-24",
    "01-25",
    "01-26",
    "01-27",
    "01-28",
    "01-29",
    "01-30",
    "01-31",
  ],
  jogar: [
    "01-20",
    "01-21",
    "01-22",
    "01-23",
    "01-24",
    "01-25",
    "01-26",
    "01-27",
    "01-28",
    "01-29",
    "01-30",
    "01-31",
  ],
  beber: [
    "01-20",
    "01-21",
    "01-22",
    "01-23",
    "01-24",
    "01-25",
    "01-26",
    "01-27",
    "01-28",
    "01-29",
    "01-30",
    "01-31",
  ],
}*/
