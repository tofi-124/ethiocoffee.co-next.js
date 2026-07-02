import { posts } from '@/app/data/data'
import InstaGallery from './InstaGallery'
import type { InstaPost } from './InstaCard'

// Server component: project posts down to the fields the cards need so the
// full data.ts (~180KB) doesn't ship in the client bundle.
export default function InstaGalleryPage() {
  const instaPosts: InstaPost[] = posts
    .filter((p) => p.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((p) => ({
      slug: p.slug!,
      title: p.title,
      desc: p.desc,
      category: p.category,
      keywords: p.keywords,
    }))

  return <InstaGallery posts={instaPosts} />
}
