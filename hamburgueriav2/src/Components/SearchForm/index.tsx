import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"

import SearchFormStyles from "./styles"


const SearchForm = () => {

    const { setSearch } = useContext(ProductsContext)

return(
    <SearchFormStyles noValidate autoComplete="off">
        <input 
            type="text" 
            name="searchInput" 
            id="searchInput" 
            placeholder="Digite o item do seu desejo..." 
            onChange={(e)=>setSearch(e.target.value)} 
        />
    </SearchFormStyles>
)

}

export default SearchForm