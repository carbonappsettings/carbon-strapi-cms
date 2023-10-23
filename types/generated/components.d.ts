import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogKeyTakeawayItem extends Schema.Component {
  collectionName: 'components_blog_key_takeaway_items';
  info: {
    displayName: 'keyTakeawayItem';
    icon: 'bulletList';
  };
  attributes: {
    keyTakeawayItem: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.key-takeaway-item': BlogKeyTakeawayItem;
    }
  }
}
