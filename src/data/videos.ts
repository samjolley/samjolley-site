// Newest first; the homepage shows the first one. A draft shows only in `astro dev`.
export const channelUrl = 'https://www.youtube.com/@SamJolley';

export const videos: { title: string; url: string; thumb: string; alt: string; draft?: boolean }[] = [
  {
    title: 'The Tempest Dux: I Finally Built My Ideal Keyboard',
    url: channelUrl,
    thumb: '/videos/tempest-dux.png',
    alt: 'Tempest Dux keyboard half with a yellow trackball, captioned "The ultimate split keyboard".',
    draft: true,
  },
];
