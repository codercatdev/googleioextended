import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getSchedules, getSpeakers } from '$lib/data/functions';


export const load = (() => {
  const schedules = getSchedules()
  if (!schedules) throw error(404, 'Not found');

  const speakers = getSpeakers()

  // Add speaker to Schedule
  schedules.map(schedule => {
    const speaker = speakers.filter(speaker => speaker.slug === schedule.authorSlug)
    schedule.speaker = speaker[0]
    return schedule;
  })

  return { schedules };
}) satisfies PageLoad;