const Search = () => {
  return (
    <div className="search">
      <img className="search__img" src="/images/search.svg" alt="search" />
      <input
        className="search__input"
        placeholder="Введите название..."
        type="text"
      />
    </div>
  )
}

export default Search
