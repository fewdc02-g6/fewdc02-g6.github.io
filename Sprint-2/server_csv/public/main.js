const addBtn = document.querySelector('.addBtn');
const popupWrapper = document.querySelector('.popup-wrapper')
const addMemoDeleteBtn = document.getElementById('addMemo-DeleteBtn')
const footerMenuBtn = document.getElementById('footerBtn1')
const navBar = document.querySelector('nav')

addBtn.addEventListener('click',()=>{
    popupWrapper.classList.remove('hidden',)
    addBtn.classList.add('hidden')

})

addMemoDeleteBtn.addEventListener('click',()=>{
    popupWrapper.classList.add('hidden')
    addBtn.classList.remove('hidden')
})

footerMenuBtn.addEventListener('click',()=>{
    navBar.classList.add
})



//////////////////////////

