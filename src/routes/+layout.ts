import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { getSpeakers } from '$lib/data/functions';


export const load = (() => {
  const speakers = getSpeakers()
  if (!speakers) throw error(404, 'Not found');
  return { speakers };
}) satisfies LayoutLoad;