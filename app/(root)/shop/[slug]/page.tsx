import ProductDetailsCollection from "@/components/shop/details/collections";
import {
  MOCK_PRODUCT,
  MOCK_REVIEWS,
  MOCK_RATING_SUMMARY,
  RELATED_PRODUCTS,
} from "@/lib/constants/mockProduct";

// In production, fetch product by slug from your API here:
// const product = await fetchProduct(params.slug);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Replace with real lookup when API is ready:
  const product = MOCK_PRODUCT;
  return {
    title: `${product.name} — Kaithari Kerala Handloom`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params; // consume params (use slug for real API lookup)

  return (
    <ProductDetailsCollection
      product={MOCK_PRODUCT}
      reviews={MOCK_REVIEWS}
      ratingSummary={MOCK_RATING_SUMMARY}
      relatedProducts={RELATED_PRODUCTS}
    />
  );
}
