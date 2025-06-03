// src/app/fashion/[subcategory]/[productId]/page.tsx

export const dynamicParams = true; // Ensures new params are generated at request time if not pre-generated

import { fashionProducts } from '@/data/products'; // Assuming this path is correct
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import RelatedProducts from '@/app/components/RelatedProducts'; // Assuming this path is correct
import SubcategoryNav from '@/app/components/SubCategoryNav'; // Assuming this path is correct
import ProductActions from '@/app/components/ProductActions'; // Assuming this path is correct

// Define the expected structure of the params
interface ProductDetailPageProps {
  params: {
    subcategory: string;
    productId: string;
  };
  // You can also include searchParams if needed:
  // searchParams: { [key: string]: string | string[] | undefined };
}

// The Page component is an async function that receives props directly
export default async function ProductDetailPage(props: ProductDetailPageProps) {
  // Destructure params directly from props
  const { params } = props;
  const { subcategory, productId } = params;

  // Find the product
  // Ensure productId is compared correctly (e.g., if product.id is a number, convert productId to a number)
  const product = fashionProducts.find(
    (p) => p.id.toString() === productId
  );

  // If product is not found, render the notFound page
  if (!product) {
    return notFound();
  }

  // Mock data for sizes and colors
  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = ['Black', 'Ivory', 'Gold'];

  return (
    <div className="w-full mx-auto overflow-x-hidden">
      {/* Subcategory navigation */}
      <SubcategoryNav section="fashion" />

      {/* Main product details grid */}
      <div className="w-4/5 mx-auto grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-32 items-start pt-8 mt-16">
        {/* Product Image Section */}
        <div className="bg-[#F8EFE4] p-4 rounded-lg shadow w-full">
          <Image
            src={product.image} // Make sure product.image is a valid path or URL
            alt={product.name}
            width={600} // Intrinsic width of the image
            height={600} // Intrinsic height of the image
            className="w-full h-auto object-cover rounded" // Responsive classes
            priority // Add priority if this is the LCP image
          />
        </div>

        {/* Product Information Section */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-black">{product.name}</h1>
          <p className="text-neutral-700">{product.description}</p>
          <p className="text-2xl font-bold text-amber-600">
            ${product.price.toFixed(2)}
          </p>

          {/* Product Actions (like size, color selection, add to cart) */}
          <ProductActions  sizes={sizes} colors={colors} /> {/* Pass product if needed by ProductActions */}


          {/* Delivery / Returns / Contact Information */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-md font-semibold text-gray-700 mb-2">
              Delivery Information
            </h3>
            <p className="text-sm text-gray-600">
              Enjoy fast and secure delivery within 3–5 business days.
            </p>
          </div>

          <div>
            <h3 className="text-md font-semibold text-gray-700 mt-6 mb-2">
              Returns & Exchanges
            </h3>
            <p className="text-sm text-gray-600">
              We offer free returns within 14 days. See our{' '}
              <Link
                href="/policies/returns" // Make sure this route exists
                className="underline hover:text-black"
              >
                return policy
              </Link>{' '}
              for more details.
            </p>
          </div>

          <div>
            <h3 className="text-md font-semibold text-gray-700 mt-6 mb-2">
              Need Help?
            </h3>
            <p className="text-sm text-gray-600">
              Contact us at{' '}
              <a
                href="mailto:support@example.com" // Replace with your actual support email
                className="underline hover:text-black"
              >
                support@example.com
              </a>{' '}
              or call <span className="font-medium">+1 800 123 4567</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <RelatedProducts
        category={product.category} // Pass the actual category
        currentProductId={product.id}
      />
    </div>
  );
}

// Optional: If you want to pre-render these pages at build time (Static Site Generation - SSG)
// export async function generateStaticParams() {
//   // Ensure fashionProducts is accessible here or fetched
//   // This function should return an array of params objects
//   // e.g., [{ subcategory: 'womens-coats', productId: '1' }, ...]
//
//   return fashionProducts.map((product) => ({
//     subcategory: product.categorySlug, // Assuming you have a categorySlug or similar for the URL
//     productId: product.id.toString(),
//   }));
// }
