import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { ProfileDetailsContainer, ProfileDetailsContent, ProfileDetailsSubTitle, ProfileDetailsTitle, ProfileDetailsInfo } from './styles';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';
import { useContextSelector } from 'use-context-selector';
import { ProfileContext } from '../../context/ProfileContext';


export function ProfileDetails() {
    const profile = useContextSelector(ProfileContext, (context) => {
        return context.profile;
    })
    return (
        <ProfileDetailsContainer>
            <img src={profile.avatar_url} alt="profile image" />
            <ProfileDetailsContent>
                <ProfileDetailsTitle>
                    <span>
                      {profile.name}
                    </span>

                    <a href={`http://www.github.com/${profile.login}`} target='_blank' >GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='#3294F8' /></a>
                </ProfileDetailsTitle>
                <ProfileDetailsSubTitle>
                    {profile.bio}
                </ProfileDetailsSubTitle>

                <ProfileDetailsInfo>
                
                <span> <FontAwesomeIcon icon={faGithub} color='#3A536B' /> {profile.login}</span>
                <span> <FontAwesomeIcon icon={faBuilding} color='#3A536B' /> {profile.company}</span>
                <span> <FontAwesomeIcon icon={faUserGroup} color='#3A536B' /> {profile.followers} seguidores</span>
                </ProfileDetailsInfo>
            </ProfileDetailsContent>
        </ProfileDetailsContainer>
    )
}