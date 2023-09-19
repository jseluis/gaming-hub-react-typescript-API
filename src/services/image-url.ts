import noImage from "../assets/no-image.webp";
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  // Check index from the beginnig of media/ and add media/ length
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
