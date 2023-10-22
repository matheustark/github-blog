import { ReactNode, useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';
import { api } from '../lib/api';

interface ProfileProps {
    name: string;
    company?: string;
    login?: string;
    bio?: string;
    avatar_url?: string;
    followers?: number; 
}

interface ProfileContextProps {
    profile: ProfileProps;
    issues: IssueProps;
    issueDetail: IssueDetailProps;
    fetchProfile: () => Promise<void>;
    fetchIssues: (query: string) => Promise<void>;
    fetchIssueDetail: (issueNumber?: string) => Promise<void>;

}

interface IssueProps {
    total_count: number;
    items: Array<{
        number: number;
        title?: string;
        body: string;
        created_at: string;
    }>
  
}

interface IssueDetailProps {
  title?: string;
  updated_at: string;
  comments?: number;
  body?: string;
  user?: {
    login?: string;
  }
  
}

interface ProfileProviderProps {
    children: ReactNode;
}


export const ProfileContext = createContext({} as ProfileContextProps);

export function ProfileProvider({ children }: ProfileProviderProps) {
    const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);
    const [issues, setIssues] = useState<IssueProps>({} as IssueProps);
    const [issueDetail, setIssueDetail] = useState<IssueDetailProps>({} as IssueDetailProps);

    const fetchProfile = useCallback(async () => {
        const response = await api.get('users/matheustark');
        setProfile(response.data)
    }, [])

    const fetchIssues = useCallback(async (query?: string) => {
        const response = await api.get('search/issues', {
            params: {
                q: `${query} repo:matheustark/github-blog`,

            }
        });
        setIssues(response.data)
    }, [])

    const fetchIssueDetail = useCallback(async (issueNumber?: string) => {
        const response = await api.get(`repos/matheustark/github-blog/issues/${issueNumber}`);
        setIssueDetail(response.data)
       
    }, [])

    useEffect(() => {
        fetchProfile()
        fetchIssues('')
    }, [fetchProfile, fetchIssues])

    return (
        <ProfileContext.Provider value={{ profile, issues, issueDetail, fetchProfile, fetchIssues, fetchIssueDetail }}>
            {children}
        </ProfileContext.Provider>
    )
}