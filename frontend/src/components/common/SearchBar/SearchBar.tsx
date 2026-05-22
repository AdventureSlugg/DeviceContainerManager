import './SearchBar.css';



function SearchBar () {
	return (
		<input 
			className='searchBar'
			type='text'
			placeholder='⌕   Search for an asset, location, or device...'
		/>
	)
}

export default SearchBar;