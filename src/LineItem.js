import React from 'react'
import {FaTrashAlt} from "react-icons/fa";

const LineItem = ({ item,handlecheck,handleDelete}) => {
  return (
    <li className='item' key={item.id}>
                <input
                    type="checkbox"
                    onChange={() => handlecheck(item.id)}
                    checked={item.checked}
                />
                                      
                  <label
                      style={(item.checked)?{textDecoration:'line-through'}:
                    null}
                      onDoubleClick={() => handlecheck(item.id)}
                      checked={item.checked}> {item.item}</label>
                 < FaTrashAlt
                 role ="button"
                 onClick={() => handleDelete(item.id)}
                 tabIndex="0"
                 aria-label={`Delete ${item.item}`}
                 />
                </li>
  )
}

export default LineItem