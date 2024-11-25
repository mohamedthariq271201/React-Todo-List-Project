import React from 'react'

const Searchitem = ({search,setsearch}) => {
  return (
  <form className='searchform' onSubmit={(e)=>e.
   preventDefault()}>
    <label htmlFor='search'>search</label>
    <input 
    id='search'
    type='text'
    role='searchbox'
    placeholder='search Items'
    value={search}
    onChange={(e)=>setsearch(e.target.value)}
   />
   </form> 
  )    

}

export default Searchitem