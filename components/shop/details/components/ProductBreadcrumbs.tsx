import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ProductBreadcrumbsProps {
  category: string;
  productName: string;
}

export default function ProductBreadcrumbs({
  category,
  productName,
}: ProductBreadcrumbsProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="font-body text-xs">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/"
              className="text-[#7A6A52] hover:text-[#C9A84C] transition-colors"
            >
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[#C9A84C]" />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/collections"
              className="text-[#7A6A52] hover:text-[#C9A84C] transition-colors"
            >
              Collections
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[#C9A84C]" />
        <BreadcrumbItem>
          <BreadcrumbPage className="max-w-[200px] truncate text-[#2C2416]">
            {productName}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
