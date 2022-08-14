const AddProduct = () => {
  return <div>AddProduct</div>;
};
export default AddProduct;


export async function getServersideProps() {
  return {
    props: {
      message: 'Hello world'
    }
  }
}
