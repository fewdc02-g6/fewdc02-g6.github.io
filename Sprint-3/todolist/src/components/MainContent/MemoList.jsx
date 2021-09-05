import React from 'react'
import Memo from './Memo'
import './MainContent.css'

export default function MemoList({memos, taskType}) {
    return (
        <div className="memolist">

            <Memo memos={memos} taskType={taskType}/>
        </div>
    )
}
