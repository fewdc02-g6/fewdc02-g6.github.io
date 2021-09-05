import React, { useState, useEffect } from 'react'
// import getAllData from '../components/getAllData'
import MemoList from './MemoList';

export default function Test({memos}) {

    useEffect(() => {
        console.log("useEffect");
        // let data = getAllData()
        // setMemos(data)
    },[])

    return (
        <div>
            <MemoList memos={memos}/>
        </div>
    )
}
