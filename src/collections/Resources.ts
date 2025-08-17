import type { CollectionConfig } from 'payload'
import { ArticleStatus, ArticleLocation } from '../robox-types'


export const Resources: CollectionConfig = {
  slug: 'resources',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "File",
      type: "upload",
      relationTo: "files",
      required: true,
    },
    {
      name: "title",
      type: "text",
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
          defaultValue: 'Student Resources',
          required: true,
        },
      ],
    },
    
  ],
  upload: {
    formatOptions: {
      format: 'webp',
    },
    mimeTypes: ['image/webp', 'image/jpeg', 'image/png'],
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
}
