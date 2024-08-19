import React, { useState,useEffect } from 'react'

const SearchFilter = () => {
  const items = {
    fruits: ["Apple", "mango", "grapes"],
    vegetables: ["cabbage", "cauliflower"],
    shoes:["nike","converse","sports"]

  };

  const [query, setQuery] = useState("");
  const [filterItems, setFilterItems] = useState([]);
  const [isVisible,setIsVisible]=useState(false);

  const handleChangeData = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = items[lowerCaseQuery] || [];
      setFilterItems(filtered);
    }, 500); 

    return () => clearTimeout(timer); 
  }, [query]);

  return (
    <>
      <div className='search_bar'>
        <h1 style={{textAlign:"center"}}>Search Items</h1>
        <input type='text' placeholder='enter items' className='search_input' value={query} onChange={handleChangeData} />

      </div>
      <div className='items-list'>
        {filterItems.length > 0 ?
          (
            filterItems.map((item, index) => (
              <ul>
                <li key={index}>{item}</li>
              </ul>))) :
          <h3> No items found</h3>}

      </div>
    </>
  )
}

export default SearchFilter
