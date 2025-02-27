'use client'

import {useState} from 'react'
export default function page() {
    const handleclick = () => {
        alert ("Hello")
    }
    
    const handlechange = () => {

    }

  return (
    <>
    <h1> Event Handling, Creating Funtion & Managing States</h1>
    <button onclick = {handleclick}>Click here</button>
    </>
    
  )
}

