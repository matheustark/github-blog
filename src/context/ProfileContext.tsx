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
    fetchProfile: () => Promise<void>
}

interface ProfileProviderProps {
    children: ReactNode;
}


export const ProfileContext = createContext({} as ProfileContextProps);

export function ProfileProvider({ children }: ProfileProviderProps) {
    const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);

    const fetchProfile = useCallback(async () => {
        const response = await api.get('matheustark');
        setProfile(response.data)
    }, [])

    useEffect(() => {
        fetchProfile()
    }, [fetchProfile])

    return (
        <ProfileContext.Provider value={{ profile, fetchProfile }}>
            {children}
        </ProfileContext.Provider>
    )
}