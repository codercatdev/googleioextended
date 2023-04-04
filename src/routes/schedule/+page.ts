import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getSchedules } from '$lib/data/functions';


export const load = (() => {
  const schedules = getSchedules()
  if (!schedules) throw error(404, 'Not found');
  return { schedules };
}) satisfies PageLoad;