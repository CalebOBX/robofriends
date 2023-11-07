const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search for robots in your area'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;