import coverImage from '../../assets/Cover.png';
import { HeaderImage } from './styles';

export function Header() {
    return (
          <HeaderImage src={coverImage} alt='cover header' />
    )
}