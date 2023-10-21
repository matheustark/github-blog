import * as z from 'zod';
import { SearchContainer, SearchLabelContainer } from "./styles";
import { useForm } from 'react-hook-form';
import { useContextSelector } from 'use-context-selector';
import { ProfileContext } from '../../context/ProfileContext';

const searchFormSchema = z.object({
    query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { register, handleSubmit } = useForm<searchFormInputs>();

    const profile = useContextSelector(ProfileContext, (context) => {
        return context.issues;
    })
    
    return (
        <SearchContainer onSubmit={handleSubmit(data => console.log(data))}>
            <SearchLabelContainer>
            <span>Publicações</span>
            <span> {profile.total_count} Publicações</span>
            </SearchLabelContainer>
      
            <input { ...register('query') } type="text" placeholder="Buscar Conteudo" ></input>
        </SearchContainer>
    )
}