'use client'
import React from 'react'

function Button() {
    const handleclick = () => {
        alert("Hello")
    }
  return (
    <button onClick={handleclick}>Click here</button>
  )
}

export default Button