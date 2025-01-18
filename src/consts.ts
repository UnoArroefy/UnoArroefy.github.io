export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'yqroo',
  DESCRIPTION:
    'My personal blog where I write about something I interested in.',
  EMAIL: 'numroua@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://unoarroefy.github.io',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' },
  // { href: '/tags', label: 'tags' },
  // { href: '/authors', label: 'authors' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/UnoArroefy', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/unoarroefy/', label: 'LinkedIn' },
  { href: 'numroua@gmail.com', label: 'Email' },
  // { href: 'https://www.instagram.com/__unoq', label: 'Instagram' },
  // { href: 'https://x.com/unozenobueno', label: 'Twitter' },
]
