import { ProfileDetails } from '../../components/ProfileDetails';
import { SearchForm } from '../../components/SearchForm';
import { IssueItemTitle, IssueList, ProfileContainer, IssueContent } from './styles';
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
                {issues?.items?.map(issue =>  <a key={issue.number} href={`/issue/${issue.number}`}>
                    <IssueContent>
                    <IssueItemTitle>
                        <span>
                        {issue.title}
                        </span>
                        <span>
                        Há 1 dia
                        </span>
                    </IssueItemTitle>
                       <div>
                       { truncateText(issue.body, 27)}
                        </div> 
                    </IssueContent>

                    </a>)}
            </IssueList>
        </ProfileContainer>
    )
}