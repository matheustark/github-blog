import { ProfileDetails } from '../../components/ProfileDetails';
import { SearchForm } from '../../components/SearchForm';
import { IssueDescription, IssueItemTitle, IssueList, ProfileContainer } from './styles';
import { truncateText } from './utils/truncateText';
import { ProfileContext } from '../../context/ProfileContext';
import { useContextSelector } from 'use-context-selector';

export function Profile() {
    const issues = useContextSelector(ProfileContext, (context) => {
        return context.issues;
    })

    return(
       <ProfileContainer>
        <ProfileDetails />
            <SearchForm />
            <IssueList>
                {issues?.items?.map(issue =>  <a key={issue.number} href={`/issue/${issue.number}`}><IssueItemTitle>
                        <span>
                        {issue.title}
                        </span>
                        <span>
                        Há 1 dia
                        </span>
                    </IssueItemTitle>
                       <IssueDescription>
                       { truncateText(issue.body, 27)}
                        </IssueDescription> 
                    </a>)}
            </IssueList>
        </ProfileContainer>
    )
}