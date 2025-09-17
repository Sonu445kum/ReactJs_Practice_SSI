import React from 'react'
import ChildCompo from './ChildCompo'

export default function ParentCompo({Person}) {
  return (
    <div>
        <h1>ParentCompo</h1>
        <ChildCompo Person={Person}/>
    </div>
    
  )
}
