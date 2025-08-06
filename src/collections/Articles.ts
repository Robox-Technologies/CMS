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
  upload: {
    formatOptions: {
      format: 'webp',
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: "thumbnail",
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: "row",
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
      ],
    },
    {
      type: "text",
      name: 'tags',
      hasMany: true,
      required: false,
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
