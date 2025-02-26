import React from 'react'
import Link from 'next/link'

function Page() {

  const vegis = [
    {
      id: 1,
      veginame : "Broccoli"
    },
    {
      id: 2,
      veginame : "Potato"
    },
    {
      id: 3,
      veginame : "Carrort"
    },
    {
      id: 4,
      veginame : "Pumpkin"
    },
    {
      id: 5,
      veginame : "Spinish"
    },
  ];

  return (
    <>
      <div>Vegis page</div>

      <ul>
        {vegis.map((vegi) => (
          <li key={vegi.id}>
            <Link href={`/products/vegis/${vegi.veginame}`}>{vegi.veginame}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Page;
