import { supabaseClient } from "@supabase/auth-helpers-nextjs";

const Beer = () => {
  return <div>Beer</div>;
};
export default Beer;




export async function getServerSideProps({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data, error } = await supabaseClient
    .from("products")
    .select("*, category(*)")
    .eq("id", id)
    .single();

  return {
    props: {
      product: data,
    },
  };
}
