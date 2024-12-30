import pageTitleImage from "./images/cart-page-header-img.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
export default function PageTitle({ pageName }: { pageName: string }) {
  return (
    <section
      style={{
        backgroundImage: `url(${pageTitleImage.src})`,
        backgroundSize: "cover",
      }}
      className="py-20"
    >
      <div className="container text-center ">
        <h1 className="text-white text-[4rem] font-[800]">{pageName}</h1>
        <Breadcrumb className="mt-10">
          <BreadcrumbList className="lg:text-[1.6rem] flex justify-center lg:text-white">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="lg:text-white">
                {pageName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
}
