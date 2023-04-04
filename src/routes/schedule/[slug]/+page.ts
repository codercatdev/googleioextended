import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getSchedule, getSpeaker } from '$lib/data/functions';


export const load = (({ params }) => {
  const schedule = getSchedule(params.slug)
  if (!schedule) throw error(404, 'Not found');

  const speaker = getSpeaker(schedule.authorSlug);
  return { schedule, speaker };
}) satisfies PageLoad;