import OrderDetails from "./_components/order-details";


const page = ({params: {id}}:{params:{id:string}}) => {
  return <div className="container">
    <OrderDetails  />
  </div>;
};
export default page;
