import { speakers } from './speakers';
import { events } from './events';

export const getSchedules = (): typeof events => {
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
