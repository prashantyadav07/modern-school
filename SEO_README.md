# SEO Configuration

This project includes comprehensive SEO setup with sitemap.xml and robots.txt files for optimal search engine optimization.

## Files

### `public/sitemap.xml`
- Contains all website URLs with proper priorities and change frequencies
- Updated automatically with current dates
- Includes all main pages: Home, About, Academics, Courses, Faculty, Admissions, Facilities, Gallery, Authenticity, Inquiry, and Contact

### `public/robots.txt`
- Allows all major search engines (Google, Bing, Yahoo)
- Includes social media crawlers (Facebook, Twitter, LinkedIn)
- Blocks unwanted bots (Ahrefs, MJ12bot, DotBot)
- References the sitemap location
- Sets appropriate crawl delays

## Maintenance

### Automatic Generation
Use the following command to regenerate SEO files with current dates:

```bash
npm run generate-seo
```

This will update both `sitemap.xml` and `robots.txt` with the latest configuration.

### Manual Updates
If you add new pages or change routes, update the routes array in:
- `scripts/generate-seo-files.js` (for generation script)
- `src/lib/sitemapGenerator.js` (for utility functions)

## SEO Features

- ✅ XML Sitemap with proper schema
- ✅ Robots.txt with comprehensive bot rules
- ✅ Dynamic sitemap generation
- ✅ Proper priority and change frequency settings
- ✅ Social media crawler support
- ✅ Mobile crawler optimization

## URLs Covered

1. `/` - Homepage (Priority: 1.0)
2. `/about` - About Page (Priority: 0.9)
3. `/academics` - Academics Overview (Priority: 0.8)
4. `/academics/courses` - Courses Page (Priority: 0.9)
5. `/academics/faculty` - Faculty Page (Priority: 0.7)
6. `/admissions` - Admissions Page (Priority: 0.95)
7. `/facilities` - Facilities Page (Priority: 0.7)
8. `/gallery` - Gallery Page (Priority: 0.6)
9. `/authenticity` - Authenticity/Certificates (Priority: 0.8)
10. `/inquiry` - Inquiry Form (Priority: 0.7)
11. `/contact` - Contact Page (Priority: 0.8)

## Search Console Submission

After deployment, submit these URLs to Google Search Console and Bing Webmaster Tools:

- Sitemap: `https://www.jscollegeofeducation.com/sitemap.xml`
- Robots: `https://www.jscollegeofeducation.com/robots.txt`