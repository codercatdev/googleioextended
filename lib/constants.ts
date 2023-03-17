export const SITE_URL = 'https://googleioextended.com';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'gdggrandrapids';
export const BRAND_NAME = 'GDG Grand Rapids';
export const SITE_NAME_MULTILINE = ['GDG Grand Rapids', 'I/O Extended'];
export const SITE_NAME = 'GDG Grand Rapids I/O Extended';
export const META_DESCRIPTION =
  'Local developers come together for I/O Extended events to discuss the latest new technologies, and meeting other technology enthusiasts in person and remote.';
export const SITE_DESCRIPTION =
  'An interactive online experience for Google Developer Group - Grand Rapids, I/O Extended';
export const DATE = '10 May 2023';
export const SHORT_DATE = 'May 10 - 9:00am EDT';
export const FULL_DATE = 'May 10th 9am Eastern Time (GMT-4)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT = 'https://gdg.community.dev/participation-terms/';
export const REPO = 'https://github.com/codercatdev/googleioextended';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Live Stage',
    route: '/stage/a'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Expo',
    route: '/expo'
  },
  {
    name: 'Jobs',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';
