import type { CollectionConfig } from 'payload'

export const Files: CollectionConfig = {
  slug: 'files',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    mimeTypes: ["application/pdf"],
  },
}
