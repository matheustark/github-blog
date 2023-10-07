import { ProfileDetailsContainer, ProfileDetailsContent, ProfileDetailsSubTitle, ProfileDetailsTitle, ProfileDetailsInfo } from './styles';
import perfil from '../../assets/eu.png';

export function ProfileDetails() {
    return (
        <ProfileDetailsContainer>
            <img src={perfil} alt="profile image" />
            <ProfileDetailsContent>
                <ProfileDetailsTitle>
                    <span>
                      Matheus Goncalves
                    </span>

                    <a href="http://www.github.com" >GITHUB</a>
                </ProfileDetailsTitle>
                <ProfileDetailsSubTitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, eum illum adipisci 
                    placeat ab numquam dignissimos quasi dolor perferendis rerum eius vero porro earum reprehenderit
                </ProfileDetailsSubTitle>

                <ProfileDetailsInfo>
                <span>matheustark</span>
                <span>Levva</span>
                <span>10 seguidores</span>
                </ProfileDetailsInfo>
            </ProfileDetailsContent>
        </ProfileDetailsContainer>
    )
}