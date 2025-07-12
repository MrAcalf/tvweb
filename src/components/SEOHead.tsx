import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "UniTv Oficial Recargas - Premium TV Plans and Packages",
  description = "Premium TV Plans and Packages for your entertainment needs. Get the best TV packages with high-quality channels and excellent customer service.",
  keywords = "TV plans, premium TV, entertainment packages, TV channels, streaming, UniTv, recargas, TV packages",
  image = "https://unitvrecargas.com/og-image.jpg",
  url = "https://unitvrecargas.com/",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "UniTv Oficial Recargas",
}) => {
  const siteName = "UniTv Oficial Recargas";
  const twitterHandle = "@unitvrecargas";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content={twitterHandle} />

      {/* Article specific meta tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content={author} />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEOHead;
