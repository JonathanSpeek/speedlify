module.exports = {
  name: "speek.dev", // optional, falls back to object key
  description: "Jonathan's Personal web site",
  skip: !process.env.CONTEXT,
  options: {
    frequency: 60 * 23, // 23 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site",
  },
  urls: [
    "https://www.speek.dev/",
    "https://www.speek.dev/blog/",
    "https://www.speek.dev/about/",
    "https://www.speek.dev/uses/",
    "https://www.speek.dev/coffee/",
    // Popular Posts
    "https://speek.dev/blog/astro-on-the-edge/",
  ],
};
