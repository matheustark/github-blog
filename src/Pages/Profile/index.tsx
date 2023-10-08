import { ProfileDetails } from '../../components/ProfileDetails';
import { SearchForm } from '../../components/SearchForm';
import { ProfileContainer } from './styles';

export function Profile() {
    return(
       <ProfileContainer>
        <ProfileDetails />
            <SearchForm />
        </ProfileContainer>
    )
}