import ProductsTable from "@/app/(products)/products-table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const ProductsPage = ({searchParams}: {searchParams: {[key:string]: string | string[] }}) => {

  const page = searchParams.page ? parseInt(searchParams.page as string) : 1

  console.log({page})

  return (
			<div>
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold">Products</h1>
					<Link href="/dashboard/products/create">
						<Button className="flex flex-row gap-x-3">
							<PlusIcon />
              <span>Create Product</span>
						</Button>
					</Link>
				</div>
        <Separator className="my-3" />
        <Suspense fallback={"Loading"}>
           <ProductsTable page={page} />
        </Suspense>
			</div>
		);
};
export default ProductsPage;
