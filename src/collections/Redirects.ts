import type { CollectionConfig } from 'payload'
import slugify from 'slugify';

export const redirects: CollectionConfig = {
  slug: 'redirects',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'destination',
      type: 'relationship',
      relationTo: 'files',
      required: true,
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return;
        if (!data.slug && data.slug) {
          data.slug = slugify(data.slug, { lower: true, strict: true });
        }
        return data;
      },
    ],
  },
}
