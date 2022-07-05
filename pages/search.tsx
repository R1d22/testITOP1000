import { useEffect, useState} from "react";
import { DebounceInput } from 'react-debounce-input';


export default function Search() {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')
  const [searchArr, setSearchArr] = useState([]);
  useEffect(() => {
    const performSearch = (query: string) => fetch(`https://hatsa.com/api/search/public/afiproducts/search/${query}?dedupe=true`)
    .then((response) => response.json())
    .then((data) => {
        setData(data.data)  
        for (let i = 0; i < data.data.length; i ++) {
          const itemName = data.data[i].product.title
          searchArr.push(itemName)
        }
        setSearchArr(searchArr)
    })
    if (search.length === 0 ) {
      return
    } else (
      performSearch(search)
    ) 
  }, [search])
  console.log('Items:', searchArr)
  return (
    <div className="p-4">
      <label htmlFor="searchQuery" className="mr-4">Search for:</label>
      <DebounceInput 
        minLength={2}
        debounceTimeout={200} 
        id="searchQuery" 
        type="text" 
        onChange={(el) => setSearch(el.target.value)} 
        className="border" 
      />
      <ul>
        {data?.map(({ id, product: { title } }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

