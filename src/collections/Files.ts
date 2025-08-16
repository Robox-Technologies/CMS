import type { CollectionConfig } from 'payload'
import { ArticleStatus, ArticleLocation } from '../robox-types'


export const Files: CollectionConfig = {
  slug: 'files',
  access: {
    read: () => true,
  },
  fields: [
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
          name: "favorite",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: 'location',
          type: 'select',
          options: ArticleLocation.map(location => ({
            label: location.charAt(0).toUpperCase() + location.slice(1),
            value: location,
          })),
          defaultValue: 'blog',
          required: true,
        },
      ],
    },
  ],
  upload: true,
}
