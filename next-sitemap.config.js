/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.projectelite.in', // ← 🔁 change to your actual domain
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/middleware-disabled'], // if any
   additionalPaths: async (config) => {
    // Return an array of extra paths to add to sitemap
    return [
      { loc: '/trainers', lastmod: new Date().toISOString() },
      // add more static pages if needed
    ];
  },

};
