import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { ProfileDetailsContainer, ProfileDetailsContent, ProfileDetailsSubTitle, ProfileDetailsTitle, ProfileDetailsInfo } from './styles';
import perfil from '../../assets/eu.png';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';

export function ProfileDetails() {
    return (
        <ProfileDetailsContainer>
            <img src={perfil} alt="profile image" />
            <ProfileDetailsContent>
                <ProfileDetailsTitle>
                    <span>
                      Matheus Goncalves
                    </span>

                    <a href="http://www.github.com" target='_blank' >GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='#3294F8' /></a>
                </ProfileDetailsTitle>
                <ProfileDetailsSubTitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, eum illum adipisci 
                    placeat ab numquam dignissimos quasi dolor perferendis rerum eius vero porro earum reprehenderit
                </ProfileDetailsSubTitle>

                <ProfileDetailsInfo>
                
                <span> <FontAwesomeIcon icon={faGithub} color='#3A536B' /> matheustark</span>
                <span> <FontAwesomeIcon icon={faBuilding} color='#3A536B' /> Levva</span>
                <span> <FontAwesomeIcon icon={faUserGroup} color='#3A536B' /> 10 seguidores</span>
                </ProfileDetailsInfo>
            </ProfileDetailsContent>
        </ProfileDetailsContainer>
    )
}