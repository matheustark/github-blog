import { SearchContainer, SearchLabelContainer } from "./styles";


export function SearchForm() {
    return (
        <SearchContainer>
            <SearchLabelContainer>
            <span>Publicações</span>
            <span> 6 Publicações</span>
            </SearchLabelContainer>
      
            <input placeholder="Buscar Conteudo" ></input>
        </SearchContainer>
    )
}