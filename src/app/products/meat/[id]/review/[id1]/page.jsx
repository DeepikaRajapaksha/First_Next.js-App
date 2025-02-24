import React from 'react'

function page({params}) {
  return (
    <div>Meat item {params.id} review {params.id1}</div>
  )
}

export default page