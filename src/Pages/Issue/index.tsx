import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDay, faComment, faChevronLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { IssueContainer, IssueInfo, IssueTitleContainer, IssueTitleContent, LinkContainer, IssueContent } from "./styles"
import { useContextSelector } from 'use-context-selector';
import { ProfileContext } from '../../context/ProfileContext';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown'
import { formatterDate } from '../../utils/formatDate';

export function Issue() {
    const { issueId } = useParams();

    const fetchIssueDetail = useContextSelector(ProfileContext, (context) => {
        return context.fetchIssueDetail;
    });

    const issueDetail = useContextSelector(ProfileContext, (context) => {
        return context.issueDetail;
    });

    useEffect(() => {
        fetchIssueDetail(issueId);
    }, [fetchIssueDetail, issueId])


    return (
        <IssueContainer>

        <IssueTitleContainer>
            <LinkContainer>
            <a href='/'><FontAwesomeIcon icon={faChevronLeft} />Voltar</a> <a href={`https://github.com/matheustark/github-blog/issues/${issueId}`} >Ver no Github<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </LinkContainer>
            <IssueTitleContent>{issueDetail.title}</IssueTitleContent>
            <IssueInfo>
            <span><FontAwesomeIcon icon={faGithub} /> {issueDetail?.user?.login} </span>
            <span><FontAwesomeIcon icon={faCalendarDay} /> {issueDetail.updated_at && formatterDate(issueDetail.updated_at)} </span>
             <span><FontAwesomeIcon icon={faComment} /> {issueDetail.comments} comentarios</span>
            </IssueInfo>
        </IssueTitleContainer>
        <IssueContent>
        <Markdown>{issueDetail.body}</Markdown>
            
        </IssueContent>
        </IssueContainer>


    )
}