import React, { Suspense, lazy } from "react";

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

// Lazy load components for better performance
const LazyHero = lazy(() => import("./Hero"));
const LazyPlanSection = lazy(() => import("./PlanSection"));
const LazyFeatures = lazy(() => import("./Features"));
const LazyAbout = lazy(() => import("./About"));
const LazyTestimonials = lazy(() => import("./Testimonials"));
const LazyCTASection = lazy(() => import("./CTASection"));
const LazyFAQSection = lazy(() => import("./FAQSection"));

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  fallback = (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
    </div>
  ),
}) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

// Preload critical resources
const preloadCriticalResources = () => {
  // Preload critical CSS
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "style";
  link.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
  document.head.appendChild(link);

  // Preload critical images
  const criticalImages = ["/hero-image.jpg", "/logo.png", "/og-image.jpg"];

  criticalImages.forEach((src) => {
    const img = document.createElement("link");
    img.rel = "preload";
    img.as = "image";
    img.href = src;
    document.head.appendChild(img);
  });
};

// Intersection Observer for lazy loading
export const useIntersectionObserver = (callback: () => void, options = {}) => {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    return () => observer.disconnect();
  }, [callback, options]);
};

// Image optimization component
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  lazy?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  lazy = true,
}) => {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (imgRef.current && lazy) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || "";
              observer.unobserve(img);
            }
          });
        },
        { rootMargin: "50px" }
      );

      observer.observe(imgRef.current);
      return () => observer.disconnect();
    }
  }, [lazy]);

  return (
    <img
      ref={imgRef}
      data-src={lazy ? src : undefined}
      src={lazy ? undefined : src}
      alt={alt}
      className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"}`}
      style={{ transition: "opacity 0.3s ease-in-out" }}
      width={width}
      height={height}
      loading={lazy ? "lazy" : "eager"}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export {
  LazyHero,
  LazyPlanSection,
  LazyFeatures,
  LazyAbout,
  LazyTestimonials,
  LazyCTASection,
  LazyFAQSection,
};
export default PerformanceOptimizer;
