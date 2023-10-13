import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDay, faComment, faChevronLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { IssueContainer, IssueInfo, IssueTitleContainer, IssueTitleContent, LinkContainer, IssueContent } from "./styles"

export function Issue() {
    return (
        <IssueContainer>

        <IssueTitleContainer>
            <LinkContainer>
            <a><FontAwesomeIcon icon={faChevronLeft} />Voltar</a> <a>Ver no Github<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </LinkContainer>
            <IssueTitleContent>JavaScript data types and data structures</IssueTitleContent>
            <IssueInfo>
            <span><FontAwesomeIcon icon={faGithub} /> matheustark</span>
            <span><FontAwesomeIcon icon={faCalendarDay} /> Há 1 dia</span>
             <span><FontAwesomeIcon icon={faComment} /> 5 comentarios</span>
            </IssueInfo>
        </IssueTitleContainer>
        <IssueContent>
            <span>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

        Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </span>
        </IssueContent>
        </IssueContainer>


    )
}