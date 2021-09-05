import React from 'react'


export default function Memo({ memos, taskType }) {
    const showTaskByType = text => {
        console.log(text)
        if (text === 'all') {
            return memos
        } else {
            let selectedMemo = memos.filter(memo => 
                memo.type === text
            )
            return selectedMemo
        }
    }
    const showType = text =>{  
        let classColor = "memoTopBorder " + text
        return classColor
    }
    
    return (
        <>
            {showTaskByType(taskType).map(memo =>
            (
                <div className="memo" key={memo.id} id={memo.id}>
                    <div className={showType(memo.type)}></div>
                    <div className="memoTopBar">
                        <p className="memoType blue">{memo.name}</p>
                        <svg className="delete-btn" id={memo.id} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z" /></svg>
                    </div>
                    <div className="memoContent description">{memo.description}</div>
                    <div className="memoContent">{memo.type}</div>
                    <div className="memoContent duedate">Due Date:{memo.duedate}</div>
                    <div className="memoMiniFunction">

                        <svg className="update-btn" id={memo.id} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z" /></svg>
                    </div>
                </div>

            )

            )}



        </>

    )
}
