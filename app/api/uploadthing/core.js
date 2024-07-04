import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  categoryImageUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "JB" };
    }),
  bannerImageUploader: f({ image: { maxFileSize: "2MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "JB" };
    }),
  albumLogoUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "JB" };
    }),
  songImageUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "JB" };
    }),
  blogImageUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "JB" };
    }),
  artistProfileUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "JB" };
    }),
  // customerProfileUploader: f({ image: { maxFileSize: "1MB" } })
  //   // Set permissions and file types for this FileRoute
  //   .onUploadComplete(async ({ metadata, file }) => {
  //     console.log("file url", file.url, metadata);
  //     return { uploadedBy: "JB" };
  //   }),
  // multipleProductsUploader: f({
  //   image: { maxFileSize: "8MB", maxFileCount: 4 },
  // })
  //   // Set permissions and file types for this FileRoute
  //   .onUploadComplete(async ({ metadata, file }) => {
  //     console.log("file url", file.url, metadata);
  //     return { uploadedBy: "JB" };
  //   }),
};
