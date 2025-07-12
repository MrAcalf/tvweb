# SEO Optimization Guide for UniTv Oficial Recargas

This guide provides comprehensive SEO optimization for better Google ranking and user experience.

## 📁 Files Created

### Core SEO Files
- `public/sitemap.xml` - XML sitemap for search engines
- `public/robots.txt` - Instructions for search engine crawlers
- `public/manifest.json` - PWA manifest for mobile optimization
- `public/.htaccess` - Apache server optimization
- `scripts/generate-sitemap.js` - Automated sitemap generation

### React Components
- `src/components/SEOHead.tsx` - Dynamic SEO meta tags
- `src/components/PerformanceOptimizer.tsx` - Performance optimization

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install react-helmet-async
```

### 2. Generate Sitemap
```bash
npm run generate-sitemap
```

### 3. Build with SEO
```bash
npm run build:seo
```

## 📊 SEO Features Implemented

### Meta Tags Optimization
- ✅ Primary meta tags (title, description, keywords)
- ✅ Open Graph tags for social media
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Language and locale tags
- ✅ Theme color for mobile browsers

### Technical SEO
- ✅ XML Sitemap with proper priorities
- ✅ Robots.txt with sitemap reference
- ✅ GZIP compression
- ✅ Browser caching headers
- ✅ Security headers
- ✅ HTTPS redirects
- ✅ www to non-www redirects

### Performance Optimization
- ✅ Lazy loading for components
- ✅ Image optimization with Intersection Observer
- ✅ Critical resource preloading
- ✅ Font optimization
- ✅ Bundle analysis tools

### PWA Features
- ✅ Web App Manifest
- ✅ Service Worker ready
- ✅ Mobile-optimized icons
- ✅ Offline capabilities

## 🔧 Configuration

### Update Domain
Replace `unitvrecargas.com` with your actual domain in:
- `public/sitemap.xml`
- `public/robots.txt`
- `src/components/SEOHead.tsx`
- `scripts/generate-sitemap.js`

### Customize Meta Tags
Edit the default values in `src/components/SEOHead.tsx`:
```typescript
title = 'Your Custom Title'
description = 'Your custom description'
keywords = 'your, keywords, here'
```

### Add New Pages
Update the pages array in `scripts/generate-sitemap.js`:
```javascript
const pages = [
  {
    url: '/your-new-page',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  }
];
```

## 📈 Google Analytics Setup

Add Google Analytics to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔍 Search Console Setup

1. Submit your sitemap to Google Search Console
2. Verify ownership of your domain
3. Monitor indexing status
4. Check for crawl errors

## 📱 Mobile Optimization

### Core Web Vitals
- ✅ Largest Contentful Paint (LCP)
- ✅ First Input Delay (FID)
- ✅ Cumulative Layout Shift (CLS)

### Mobile-First Design
- ✅ Responsive images
- ✅ Touch-friendly buttons
- ✅ Readable font sizes
- ✅ Fast loading times

## 🎯 Local SEO

### Structured Data
Add local business schema to `index.html`:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "UniTv Oficial Recargas",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Address",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "Your ZIP"
  },
  "telephone": "+55-12-98200-3016"
}
```

## 📊 Performance Monitoring

### Lighthouse Audit
Run Lighthouse audit to check:
- Performance score
- Accessibility score
- Best practices score
- SEO score

### Core Web Vitals
Monitor these metrics:
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

## 🔄 Maintenance

### Regular Tasks
1. Update sitemap monthly: `npm run generate-sitemap`
2. Check Google Search Console for issues
3. Monitor Core Web Vitals
4. Update content regularly
5. Test mobile performance

### Content Updates
- Keep meta descriptions fresh
- Update images with proper alt text
- Add new pages to sitemap
- Monitor keyword performance

## 🛠️ Troubleshooting

### Common Issues
1. **Sitemap not found**: Check file path and server configuration
2. **Meta tags not updating**: Clear browser cache
3. **Images not loading**: Check lazy loading implementation
4. **Performance issues**: Run bundle analysis

### Debug Commands
```bash
# Check sitemap
curl https://yourdomain.com/sitemap.xml

# Test robots.txt
curl https://yourdomain.com/robots.txt

# Analyze bundle
npm run analyze
```

## 📚 Additional Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Core Web Vitals](https://web.dev/vitals/)
- [Mobile SEO](https://developers.google.com/search/mobile-sites)
- [Structured Data](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data)

## 🎉 Success Metrics

Track these metrics for SEO success:
- ✅ Organic traffic growth
- ✅ Keyword rankings
- ✅ Page load speed
- ✅ Mobile usability score
- ✅ Core Web Vitals scores
- ✅ Search Console impressions

---

**Last Updated**: January 2024
**Version**: 1.0.0 