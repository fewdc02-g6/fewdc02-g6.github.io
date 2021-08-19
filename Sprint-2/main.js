const addBtn = document.querySelector('.addBtn');
const popupWrapper = document.querySelector('.popup-wrapper')
const addMemoDeleteBtn = document.getElementById('addMemo-DeleteBtn')

addBtn.addEventListener('click',()=>{
    popupWrapper.classList.remove('hidden',)
    addBtn.classList.add('hidden')

})

addMemoDeleteBtn.addEventListener('click',()=>{
    popupWrapper.classList.add('hidden')
    addBtn.classList.remove('hidden')
})