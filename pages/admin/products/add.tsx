import Head from "next/head";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import getCategories from "../../../fetchers/getCategories";
import { Category } from "../../../types";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import Sidebar from "../../../components/Admin/Sidebar";
import { useRouter } from "next/router";


const AddProduct = ({categories}: {categories: Category[]}) => {



  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const [selected, setSelected] = useState(categories[0]);

  const [productImage, setProductImage] = useState<string | undefined>("");


    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoading(true);

      try {
        if (!e.target.files || e.target.files.length === 0) {
          throw new Error("There was an error uploading the file");
        }

        const file = e.target.files[0];
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        let upload = await supabaseClient.storage
          .from("products")
          .upload(filePath, file);



        const fileUrl: string | undefined = upload?.data?.Key;



        setProductImage(
          `https://sqqxwwmtljjqhzmapmkh.supabase.co/storage/v1/object/public/${fileUrl}`
        );
        alert("Product image upload completed");
        setLoading(false);
        return fileUrl;
      } catch (error) {
        return null;
      }
    };


      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        let { name, description, price } = Object.fromEntries(
          new FormData(e.currentTarget)
        );



       const { data, error } = await supabaseClient
         .from("products")
         .insert([{ name: name, description: description, price: price, image: productImage, category: selected.id  }]);

          if(error) {
            throw new Error(error.message);
          } else {
            alert("Success!");
            setProductImage('');
            setLoading(false)
            router.push('/admin/products')


          }

      };



  return (
    <Fragment>
      <Head>
        <title>Add A Product | Black Impala</title>
      </Head>

      <main className="flex">
        <Sidebar />
        <div className="flex-1 max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-gray-600">Create A Product</h1>
          <form
            onSubmit={handleSubmit}
            className="mt-6 w-full p-4 md:w-4/6 border border-gray-300 bg-gray-300 rounded-lg"
          >
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3 ">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  id="name"
                  autoComplete="Product Name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product category
                </label>
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <span className="block truncate">{selected.title}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {categories.map((category) => (
                          <Listbox.Option
                            key={category.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-amber-100 text-amber-900"
                                  : "text-gray-900"
                              }`
                            }
                            value={category}
                          >
                            {({ selected }) => (
                              <Fragment>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {category.title}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </Fragment>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Description"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>

            <div className="max-w-[150px]">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">R</span>
                </div>
                <input
                  type="number"
                  name="price"
                  id="price"
                  required
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                />
              </div>
            </div>

            {productImage === "" ? (
              <div className="mt-4 bg-gray-200 p-2  rounded-lg">
                <label className="block text-sm font-medium text-gray-700">
                  Product Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span className="p-1">Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          onChange={handleFileUpload}
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <img className="w-1/3 mt-4 object-cover" src={productImage} />
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-gray-800 text-white text-lg font-bold px-16 py-2 rounded-lg mt-4"
            >
              {loading ? "Please wait.." : "Submit"}
            </button>
          </form>
        </div>
      </main>
    </Fragment>
  );
};
export default AddProduct;


export async function getStaticProps() {

  const categories = await getCategories();


  return {
    props: {
     categories: categories
    }
  }
}
