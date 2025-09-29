import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='searchItem'>Search Item</label>  
        <input 
        id='searchItem'
        placeholder='Search Item'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"/>
    
    </form>
  )
}

export default SearchItem
