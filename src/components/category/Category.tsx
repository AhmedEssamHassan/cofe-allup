import SectionTitle from "../sectionTitle/SectionTitle";
import Product from "../product/Product";
import { MdAnnouncement } from "react-icons/md";

type product = {
  name: string;
  image: string;
  price: number;
};

function Category({
  selectedCategory,
  data,
}: {
  selectedCategory: string;
  data: product[];
}) {
  return (
    <div className="container py-10">
      <SectionTitle title={selectedCategory} />
      {data ? (
        <div className="pt-5 lg:pt-10 grid gap-5 gap-y-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data?.map((el, index) => (
            <Product key={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col w-full justify-center items-center h-[300px]">
          <MdAnnouncement className="text-main_color" size={60} />
          <p className="text-3xl text-squant">No Data</p>
        </div>
      )}
    </div>
  );
}

export default Category;
