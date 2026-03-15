import { Separator } from "@/components/ui/separator";
import Container from "@/components/common/Container";
import ProductBreadcrumbs from "./components/ProductBreadcrumbs";
import ProductGallery from "./components/ProductGallery";
import ProductInfoPanel from "./components/ProductInfoPanel";
import ProductHighlights from "./components/ProductHighlights";
import ProductDetailsTabs from "./components/ProductDetailsTabs";
import ReviewsSection from "./components/ReviewsSection";
import SimilarClothingSection from "./components/SimilarClothingSection";
import type { ProductDetail, RelatedProduct } from "@/lib/types/product";
import type { Review, RatingSummary } from "@/lib/types/review";

interface ProductDetailsCollectionProps {
  product: ProductDetail;
  reviews: Review[];
  ratingSummary: RatingSummary;
  relatedProducts: RelatedProduct[];
}

export default function ProductDetailsCollection({
  product,
  reviews,
  ratingSummary,
  relatedProducts,
}: ProductDetailsCollectionProps) {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      {/* ── Breadcrumb bar ───────────────────────────────────────────── */}
      <div className="border-b border-[#E8DFC8] bg-[#F5EFE0] py-3">
        <Container>
          <ProductBreadcrumbs
            category={product.category}
            productName={product.name}
          />
        </Container>
      </div>

      {/* ── Main product section ─────────────────────────────────────── */}
      <Container className="py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Gallery */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery
              images={product.images}
              productName={product.name}
            />
          </div>

          {/* Info panel */}
          <div>
            <ProductInfoPanel product={product} />

            {/* Highlights below CTA on mobile / inline on desktop */}
            <div className="mt-6">
              <ProductHighlights />
            </div>
          </div>
        </div>
      </Container>

      <Separator className="bg-[#E8DFC8]" />

      {/* ── Product Details Tabs ─────────────────────────────────────── */}
      <div className="bg-[#FAF7F0] py-12 lg:py-16">
        <Container>
          <ProductDetailsTabs product={product} />
        </Container>
      </div>

      <Separator className="bg-[#E8DFC8]" />

      {/* ── Reviews ─────────────────────────────────────────────────── */}
      <div className="bg-[#F5EFE0] py-12 lg:py-16">
        <Container>
          <ReviewsSection initialReviews={reviews} summary={ratingSummary} />
        </Container>
      </div>

      <Separator className="bg-[#E8DFC8]" />

      {/* ── Similar Clothing ─────────────────────────────────────────── */}
      <div className="bg-[#FAF7F0] py-12 lg:py-16">
        <Container>
          <SimilarClothingSection products={relatedProducts} />
        </Container>
      </div>
    </div>
  );
}
