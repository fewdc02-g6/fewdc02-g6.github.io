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



////////////////////////// post----------------------------------------

document.querySelector('.add-form').addEventListener('submit', async (event) => {

    // 停止原先form submission的動作
    event.preventDefault();

    // 用form 這個variable 裝住個form
    const form = event.target

    // 砌一個 object 用來放 data ，配合server要的data
    const dataObj = {
        // id: form.id.value,
        type: form.type.value,
        name: form.name.value,        
        description: form.description.value,        
        duedate: form.duedate.value,        
    }

    // 用fetch的 POST 來送資料去server。
    const res = await fetch('http://localhost:8080/todolist',
        {
            method: 'POST',
            // POST，要加headers。如以json格式送出，Content-Type設定要配合返
            headers: {
                'Content-Type': 'application/json'
            },
            // 送出的資料放在body內。但要以JSON.stringify()來將object轉為json格式
            body: JSON.stringify(dataObj)
        })

    // 如果資料成功送了去server，res.ok就會等如true
    if (res.ok) {
        console.log('success')
        alert('haha')
        popupWrapper.classList.add('hidden')
        addBtn.classList.remove('hidden')
        showData()
    }
})

// ----------------------------------post----------------------------------


// ----------------------------------get------------------------------------
const showButton = document.querySelector('#navItem1')

async function showData() {
    
    const displayDataArea = document.querySelector('.memolist')

    // 用 innerHTML 更改 displayDataArea的內容
    displayDataArea.innerHTML = ''
    
    const res = await fetch('http://localhost:8080/todolist',
        {
            method: 'GET'
        })    
    const dataArr = await res.json()

    // 拆解 json 後，data本身是array，所以用for loop將它分開，再砌成html格式，直接用.innerHTML，放入displayDataArea 內
    for (let i = 0; i < dataArr.length; i++) {
        displayDataArea.innerHTML += 
        // `<form id='data-detail-form'>
        //     <div id='data-${i}' class='data-field'>
        //     <div class='id'>${dataArr[i].id}</div>
        //     <div class="name">${dataArr[i].name}</div>
        //     <div class="description">${dataArr[i].description}</div>
        //     <div class="assigned-to">${dataArr[i].assignedto}</div>
        //     <div class="due-date">${dataArr[i].duedate}</div>
        //     <div class="status">${dataArr[i].status}</div>
        //     <button class="button update" id="${dataArr[i].id}">UPDATE</button>
        //     <button class="button delete" id="${dataArr[i].id}">DELETE</button>
        //     </div>
        // </form>
        // `


        `<div class="memo">
                    <div class="memoTopBorder bg-blue"></div>
                    <div class="memoTopBar">
                        <p class="memoType blue">${dataArr[i].name}</p> 
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>                           
                    </div>
                    
                    <div class="memoContent">${dataArr[i].description}</div>
                    <div class="memoMiniFunction">                     
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z"/></svg>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>
                    </div>                    
        </div>`
    }

    // 加入 update 按扭，並加上 update 的功能 (按扭會 call 用 數據的 id，去執行 updateItem )
    // const updateButtons = document.querySelectorAll('.button.update')
    // for (let updateButton of updateButtons) {
    //     updateButton.addEventListener('click', (event) => {
    //         // 停止 HTML 原本按 button 後，要做 form submission 的動作，取而代之，用 updateButton.id  執行 updateItem
    //         event.preventDefault();
    //         updateItem(updateButton.id)
    //     })
    // }

    // // 加入 delete 按扭，並加上 delete 的功能 (按扭會 call 用 數據的 id，去執行 deleteItem )
    // const deleteButtons = document.querySelectorAll('.button.delete')
    // for (let deleteButton of deleteButtons) {
    //     deleteButton.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         deleteItem(deleteButton.id)
    //     })
    // }


}

// 要先設定好function才，可以用。 addEventListener(a, b) -> a 是引發的行動，b是行動被引發後，要執行的function
showButton.addEventListener('click', showData)
