export function cloudinaryVideoUrl(publicId, transformation = 'f_auto,q_auto:good') {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const folder = import.meta.env.VITE_CLOUDINARY_FOLDER || 'sahay-foundation';

  if (!cloudName || !publicId) return null;

  return `https://res.cloudinary.com/${cloudName}/video/upload/${transformation}/${folder}/${publicId}`;
}
