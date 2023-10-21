import createLogin from "./functions/createLogin.js";
import renderCardsAfterReload from "./functions/renderCardsAfterReload.js";



const container = document.querySelector('.container')

const loginBtn = document.querySelector('.login_btn')

loginBtn.addEventListener('click', createLogin)

if (localStorage.getItem('token')) {

  const logOutBtn = document.createElement('button')
  logOutBtn.innerHTML = 'Выйти'
  logOutBtn.classList.add('logout_btn')
  const header = document.querySelector('header')
  header.append(logOutBtn)

  logOutBtn.addEventListener('click', () => {

    localStorage.clear()
    document.location.reload()

  })


  renderCardsAfterReload()


}

