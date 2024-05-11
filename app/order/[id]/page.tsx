import OrderDetails from "./_components/order-details";


const page = ({params: {id}}:{params:{id:string}}) => {
  return <div className="container min-h-[calc(100vh-180px)]">
    <OrderDetails id={id}  />
  </div>;
};
export default page;
