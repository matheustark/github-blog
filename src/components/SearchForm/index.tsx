import * as z from 'zod';
import { SearchContainer, SearchLabelContainer } from "./styles";
import { useForm } from 'react-hook-form';

const searchFormSchema = z.object({
    query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { register, handleSubmit } = useForm<searchFormInputs>();
    
    return (
        <SearchContainer onSubmit={handleSubmit(data => console.log(data))}>
            <SearchLabelContainer>
            <span>Publicações</span>
            <span> 6 Publicações</span>
            </SearchLabelContainer>
      
            <input { ...register('query') } type="text" placeholder="Buscar Conteudo" ></input>
        </SearchContainer>
    )
}