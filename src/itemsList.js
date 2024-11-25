import React from 'react'
import LineItem from './LineItem';

const itemsList = ({items,handlecheck,handleDelete}) => {
  return (
    <ul>
            {items.map((item) =>(
                <LineItem 
                items={item}
                key={item.id}
                handlecheck={handlecheck}
                handleDelete={handleDelete}
                />
            ))}
        </ul>
    
  )
}

export default itemsList