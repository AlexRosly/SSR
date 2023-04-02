const shortTypes = [
  // gimp supported
  'jpeg',
  'png',
  // 'gif',
  // 'bmp',
  // 'tiff',

  // not gimp supported
  // 'svg+xml',
  'webp',
  // 'apng',
  // 'avif',
];

const arrayOfMimeTypes = shortTypes.map(type => `image/${type}`);

export const supportedImageMimeTypes = arrayOfMimeTypes.join(', ');

const stringOfImageTypes = shortTypes.join(', ');

const expectedStringOfImageTypes = `Expected image: ${stringOfImageTypes}`;

export const isImageType = (mimetype: string) => arrayOfMimeTypes.includes(mimetype);

export const imageTypeError = (mimetype: string) => `Got ${mimetype}. ${expectedStringOfImageTypes}`;
