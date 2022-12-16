import SearchFormStyles from "./styles"


const SearchForm = () => {

return(
    <SearchFormStyles noValidate autoComplete="off">
        <input type="text" name="searchInput" id="searchInput" placeholder="Digite o item do seu desejo..."/>
    </SearchFormStyles>
)

}

export default SearchForm