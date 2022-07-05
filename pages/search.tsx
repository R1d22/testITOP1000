// const performSearch = (query: string) => fetch(`https://hatsa.com/api/search/public/afiproducts/search/${query}?dedupe=true`)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   })

  const performSearch = async (query: string) => {
    const response = await fetch(`https://hatsa.com/api/search/public/afiproducts/search/${query}?dedupe=true`)
    console.log(await response.json)
    return await response.json()
  }
export default function Search() {
  const searchResults = [];

  return (
    <div className="p-4">
      <label htmlFor="searchQuery" className="mr-4">Search for:</label>
      <input id="searchQuery" type="text" className="border" />
      <ul>
        {searchResults.map(({ id, product: { title } }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
