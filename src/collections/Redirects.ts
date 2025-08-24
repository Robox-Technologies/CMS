import type { CollectionConfig } from 'payload'

export const redirects: CollectionConfig = {
  slug: 'redirects',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      required: true,
    },
    {
      name: 'destination',
      type: 'relationship',
      relationTo: 'files',
      required: true,
    },
  ],
}
