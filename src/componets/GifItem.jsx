import React from 'react'

export const GifItem = ({title,url,id}) => {
  return (
    <div className='card'>
    <img></img>
        <img src={ url} alt= { title }/>
        <p>{ title }</p>
      
    </div>
  )
}

export default GifItem
