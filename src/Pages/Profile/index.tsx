import { ProfileDetails } from '../../components/ProfileDetails';
import { SearchForm } from '../../components/SearchForm';
import { IssueDescription, IssueItemTitle, IssueList, ProfileContainer } from './styles';
import { truncateText } from './utils/truncateText';

const cardArray = [1, 2, 3, 4, 5, 6];
const textIssue =  'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42~'

export function Profile() {
    return(
       <ProfileContainer>
        <ProfileDetails />
            <SearchForm />
            <IssueList>
                {cardArray?.map(card =>  <a href='/issue'><IssueItemTitle>
                        <span>
                        JavaScript data types and data structures 
                        </span>
                        <span>
                        Há 1 dia
                        </span>
                    </IssueItemTitle>
                       <IssueDescription>
                       { truncateText(textIssue, 27)}
                        </IssueDescription> 
                    </a>)}
            </IssueList>
        </ProfileContainer>
    )
}