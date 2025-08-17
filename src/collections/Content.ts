import type { CollectionConfig } from 'payload';
import { ArticleStatus, ArticleLocation } from '../robox-types';

export const Content: CollectionConfig = {
  slug: 'content',
  admin: {
    useAsTitle: 'previewTitle',
  },
  labels: {
    singular: 'Content Item',
    plural: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Article', value: 'article' },
        { label: 'Resource', value: 'resource' },
      ],
      required: true,
      defaultValue: 'article',
    },
    // Shared fields
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'previewTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'articleTitle',
      type: 'text',
      admin: {
        condition: (data) => data?.type === 'article',
      },
      required: true,
    },
    {
      type: 'text',
      name: 'description',
      required: true,
    },
    // Thumbnail for both types
    // Article-specific fields
    {
      name: 'author',
      type: 'text',
      admin: {
        condition: (data) => data?.type === 'article',
      },
      required: true,
    },
    {
      name: 'tags',
      type: 'text',
      hasMany: true,
      required: false,
      admin: {
        condition: (data) => data?.type === 'article',
      },
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        condition: (data) => data?.type === 'article',
      },
    },
    // Resource-specific fields
    {
      name: 'File',
      type: 'upload',
      relationTo: 'files',
      required: true,
      admin: {
        condition: (data) => data?.type === 'resource',
      },
    },
    // Shared row fields
    {
      type: 'row',
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
    {
      name: 'favorite',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};
