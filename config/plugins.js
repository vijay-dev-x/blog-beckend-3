module.exports = ({ env }) => ({
  // email: {
  //   provider: "sendgrid",
  //   providerOptions: {
  //     apiKey: env("SENDGRID_API_KEY"),
  //   },
  //   settings: {
  //     defaultFrom: "vm2218943@gmail.com",
  //     defaultReplyTo: "vm2218943@gmail.com",
  //   },
  // },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
