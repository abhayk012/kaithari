import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ProductDetail } from "@/lib/types/product";

interface ProductDetailsTabsProps {
  product: ProductDetail;
}

export default function ProductDetailsTabs({
  product,
}: ProductDetailsTabsProps) {
  return (
    <Tabs defaultValue="details" className="w-full">
      <TabsList className="mb-6 flex w-full justify-start gap-0 rounded-none border-b border-[#E8DFC8] bg-transparent p-0 h-auto">
        {[
          { value: "details", label: "Product Details" },
          { value: "fabric", label: "Fabric & Weave" },
          { value: "care", label: "Wash Care" },
          { value: "shipping", label: "Shipping & Returns" },
        ].map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="rounded-none border-b-2 border-transparent px-4 pb-3 pt-0 font-body text-sm text-[#7A6A52] transition-colors data-[state=active]:border-[#C9A84C] data-[state=active]:text-[#2C2416] data-[state=active]:shadow-none data-[state=active]:bg-transparent hover:text-[#2C2416]"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Product Details */}
      <TabsContent value="details" className="mt-0">
        <dl className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          {product.details.map((d, i) => (
            <div
              key={d.label}
              className={`flex gap-3 py-3 px-1 ${i % 2 === 0 ? "" : ""} border-b border-[#E8DFC8] last:border-0`}
            >
              <dt className="w-32 flex-shrink-0 font-body text-xs uppercase tracking-widest text-[#7A6A52]">
                {d.label}
              </dt>
              <dd className="font-body text-sm text-[#2C2416]">{d.value}</dd>
            </div>
          ))}
        </dl>
      </TabsContent>

      {/* Fabric & Weave */}
      <TabsContent value="fabric" className="mt-0">
        <div className="rounded-sm border border-[#E8DFC8] bg-[#F5EFE0] p-5">
          <p className="font-body text-sm leading-relaxed text-[#5C3D1E]">
            Woven on traditional <strong>pit-looms</strong> in the villages of
            Thrissur and Chendamangalam, this dhoti is crafted from{" "}
            <strong>100% single-ply pure cotton</strong> yarn. The kasavu border
            is created using <strong>traditional zari threading</strong> —
            cotton-core threads with a gold metallic wrap, the same technique
            used for centuries in Kerala handloom.
          </p>
          <div className="mt-4 h-px w-full bg-[#E8DFC8]" />
          <ul className="mt-4 flex flex-col gap-2">
            {[
              "Single-ply 100% pure cotton warp and weft",
              "Traditional kasavu (zari) border with cotton-core gold thread",
              "Pit-loom woven — each piece takes 4–6 hours to weave",
              "Naturally soft — no chemical softeners used",
              "Breathable open weave — ideal for Kerala's tropical climate",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 font-body text-sm text-[#5C3D1E]"
              >
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>

      {/* Wash Care */}
      <TabsContent value="care" className="mt-0">
        <ul className="flex flex-col gap-3">
          {product.washCare.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[#E8DFC8] bg-[#F5EFE0] font-body text-[10px] text-[#C9A84C] font-semibold">
                {i + 1}
              </span>
              <span className="font-body text-sm leading-relaxed text-[#5C3D1E]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </TabsContent>

      {/* Shipping & Returns */}
      <TabsContent value="shipping" className="mt-0">
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-heading text-base font-semibold text-[#2C2416] mb-2">
              Shipping
            </h3>
            <p className="font-body text-sm leading-relaxed text-[#5C3D1E]">
              {product.shippingInfo}
            </p>
          </div>
          <div className="h-px bg-[#E8DFC8]" />
          <div>
            <h3 className="font-heading text-base font-semibold text-[#2C2416] mb-2">
              Returns & Exchanges
            </h3>
            <p className="font-body text-sm leading-relaxed text-[#5C3D1E]">
              {product.returnInfo}
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
