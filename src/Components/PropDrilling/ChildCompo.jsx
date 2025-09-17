import React from 'react'
import GrandChildCompo from './GrandChildCompo'

export default function ChildCompo({ Person }) {
    return (
        <div>
            <h1>ChildCompo</h1>
            <GrandChildCompo Person={Person}/>
        </div>
    )
}
