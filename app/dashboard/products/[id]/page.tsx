import DashboardProductPage from "@/app/(products)/dashboard-product-page";

const page =  ({params:{id}}:{params:{id:number}}) => {

  return <div>
    <DashboardProductPage id={id} />
  </div>;
};
export default page;
