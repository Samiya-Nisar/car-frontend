import React from 'react'

const ProsCons = ({data}) => {
  const dataArr = data.split(", ")
  return (
    <ul>
        {dataArr.map((d) => (
          <li style={{marginBottom:'5px', listStyle:'initial', listStyleType:'circle', textAlign:'justify'}}>{d}</li>
        ))}
    </ul>
  )
}

export default ProsCons