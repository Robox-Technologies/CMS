import type { CollectionConfig } from 'payload'
import type { ArticleStatus } from '../robox-types'
const ArticleStatus: ArticleStatus[] = ['draft', 'published', 'archived']
export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Article',
    plural: 'Articles',
  },
  defaultSort: "-createdAt",
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: 'status',
      type: 'select',
      options: ArticleStatus.map(status => ({
        label: status.charAt(0).toUpperCase() + status.slice(1),
        value: status,
      })),
      defaultValue: 'draft',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Blog Post', value: 'blog' },
        { label: 'Case Study', value: 'case-study' },
      ],
      defaultValue: 'blog',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
  upload: {
    formatOptions: {
      format: 'webp',
    },
    imageSizes: [
      {
        name: 'small',
        width: 1200,
        height: 600,
      },
    ],
  },
}
