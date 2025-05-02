import { Helmet } from "react-helmet-async";
import { getPageMetadata } from "@data/seo";

/**
 * 404-Page for non-existent routes
 */
const NotFound = () => {
  const seoMetadata = getPageMetadata({
    description: "The requested page could not be found.",
    noindex: true
  });

  return (
    <div className="flex-grow flex flex-col items-center justify-center py-20">
      <Helmet>
        <title>{seoMetadata.title}</title>
        {seoMetadata.meta.map((meta, index) => (
          <meta key={`meta-${index}`} {...meta} />
        ))}
        <html {...seoMetadata.htmlAttributes} />
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">This page does not exist.</p>
      <a 
        href="/"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/';
        }}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-md"
      >
        Back to Homepage
      </a>
    </div>
  );
};

export default NotFound; 