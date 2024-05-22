import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.prometheus.ph',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://www.prometheus.ph/works',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://www.prometheus.ph/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    }, 
    {
        url: 'https://www.prometheus.ph/blogs',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.4,
      },  
    {
        url: 'https://www.prometheus.ph/recon',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },   
       {
        url: 'https://www.prometheus.ph/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },

      {
        url: 'https://www.prometheus.ph/blogs/beautyofstruggle',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: 'https://www.prometheus.ph/blogs/creativedirection',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://www.prometheus.ph/blogs/discoveringpurpose',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: 'https://www.prometheus.ph/blogs/kwatrodistrito',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
  ]
}