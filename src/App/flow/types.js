/**
 * @format
 * @flow
 */

// Type definition for a product
export type itemType = {
  id: string,
  description: string,
  price: number,
  available: number,
  onCart?: number,
  picture: string,
  title: string,
};
