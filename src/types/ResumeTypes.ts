export interface IProfile {
    network: string;
    username: string;
    url: string;
}

export interface IBasics {
    title: string;
    function: string;
    summary: string;
    email: string;
    image: string;
    location: {
        address: string;
        postalCode: string;
        city: string;
        countryCode: string;
        region: string;
        country: string;
    };
    phone: string;
    profiles: IProfile[];
}

export interface ISkill {
    keywords: {
        name: string;
        level?: string;
        group?: number;
    };
    level?: string;
    name: string;
}

export interface IDate {
    year: number;
    month: number;
}

export interface IWork {
    name: string;
    position: string;
    url: string;
    location: string;
    startDate: IDate;
    endDate: IDate;
    summary: string;
    highlights?: string[];
    skills?: string[];
    badge?: string;
}

export interface IProject {
    name: string;
    type: string;
    summary: string;
    url: string;
    startDate: IDate;
    endDate: IDate;
    highlights?: string[];
    description: string;
    skills?: string[];
}

export interface IVolunteer {
    organization: string;
    position: string;
    url: string;
    startDate: IDate;
    endDate: IDate;
    summary: string;
    highlights?: string[];
    skills?: string[];
}

export interface IEducation {
    area: string;
    startDate: IDate;
    endDate: IDate;
    description: string;
    url: string;
    institution: string;
}

export interface ICertification {
    name: string;
    startDate: IDate;
    issuer: string;
    url: string;
    summary: string;
    highlights: string[];
}

export interface ILanguage {
    language: string;
    fluency: string;
}

export interface IResume {
    basics: IBasics;
    skills: ISkill[];
    work: IWork[];
    projects: IProject[];
    volunteer: IVolunteer[];
    education: IEducation[];
    certificates: ICertification[];
    languages: ILanguage[];
}
