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

    const fetchIssue = useContextSelector(ProfileContext, (context) => {
        return context.fetchIssues;
    })

    async function handleSearchIssue(data: searchFormInputs) {
        await fetchIssue(data.query);
    }
    
    return (
        <SearchContainer onSubmit={handleSubmit(data => handleSearchIssue(data))}>
            <SearchLabelContainer>
            <span>Publicações</span>
            <span> {profile.total_count} Publicações</span>
            </SearchLabelContainer>
      
            <input { ...register('query') } type="text" placeholder="Buscar Conteudo" ></input>
        </SearchContainer>
    )
}