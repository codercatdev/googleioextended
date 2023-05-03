import { speakers } from './speakers';
import { events } from './events';

export interface Event {
    stage: string;
    remote: boolean;
    title: string;
    summary: string;
    body: string;
    fromTime: number;
    toTime: number;
    slug: string;
    authorSlug: string;
}

export interface Schedule extends Event {
    speaker?: typeof speakers[0];
}

export const getSchedules = (): Schedule[] => {
    return events.sort((a, b) => a.fromTime - b.fromTime);
};

export const getSchedule = (slug: string) => {
    return events.filter(s => s.slug === slug)?.at(0);
};

export const getSpeakers = (): typeof speakers => {
    return speakers.sort((a, b) => {
        if (a.name === b.name) return 0;
        return a.name > b.name ? 1 : -1;
    });
};

export const getSpeaker = (slug: string) => {
    return speakers.filter(s => s.slug === slug)?.at(0);
};

export const getSpeakerSchedule = (authorSlug: string) => {
    return events.filter(e => e.authorSlug === authorSlug);
};