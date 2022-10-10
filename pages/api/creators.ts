import type { NextApiRequest, NextApiResponse } from 'next'
import { CreatorType} from '../../types/creatorTypes'

const creators = [
  {
    "name": "Justin Sullivan",
    "slug": "justin-sullivan",
    "speciality": "Ultrices morbi arcu",
    "details": "As a creator, you’ve probably got quite a strong online community already. To make the most of this and ensure your audience are aware of your upcoming Live, try creating some promotional materials. For example, short TikTok videos, Instagram reels, infographics, stories or social media posts are all excellent ways to spread the word.",
    "picture": "/justina.png"
  },
  {
    "name": "Justine Mendoza",
    "slug": "justine-mendoza",
    "speciality": "Ultrices morbi arcu",
    "details": "As a creator, you’ve probably got quite a strong online community already. To make the most of this and ensure your audience are aware of your upcoming Live, try creating some promotional materials. For example, short TikTok videos, Instagram reels, infographics, stories or social media posts are all excellent ways to spread the word.",
    "picture": "/justina.png"
  },
  {
    "name": "JustinSays",
    "slug": "justin-says",
    "speciality": "Est interdum lobortis",
    "details": "As a creator, you’ve probably got quite a strong online community already. To make the most of this and ensure your audience are aware of your upcoming Live, try creating some promotional materials. For example, short TikTok videos, Instagram reels, infographics, stories or social media posts are all excellent ways to spread the word.",
    "picture": "/justina.png"
  },
  {
    "name": "Justined",
    "slug": "justined",
    "speciality": "Amet velit",
    "details": "As a creator, you’ve probably got quite a strong online community already. To make the most of this and ensure your audience are aware of your upcoming Live, try creating some promotional materials. For example, short TikTok videos, Instagram reels, infographics, stories or social media posts are all excellent ways to spread the word.",
    "picture": "/justina.png"
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreatorType[]>
) {
  res.status(200).json(creators)
}

export function getCreatorDetails(slug: string | string[] | undefined) {
  return creators.find(creator => creator.slug === slug);
}