import cloud from "cloudinary";
import "dotenv/config";

const cloudinary = cloud.v2;

const { CLOUDINARY_CLOUD_NAME, CLOUDINARI_API_KEY, CLOUDINARI_API_SECRET } =
  process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARI_API_KEY,
  api_secret: CLOUDINARI_API_SECRET,
});

export default cloudinary;
