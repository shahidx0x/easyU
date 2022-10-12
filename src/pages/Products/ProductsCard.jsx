export const ProductsCard = ({ props }) => {
  return (
    <>
      <div>
        <div className="w-96 rounded-3xl">
          <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="w-1/3 bg-cover">
              <img src={props.image} alt="" />
            </div>

            <div className="w-2/3 p-4 md:p-4">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                {props.prod_name}
              </h1>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {props.prod_cat}
              </p>
              <div className="flex mt-2 item-center"></div>
              <div class="flex justify-between mt-3 item-center">
                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                  $220
                </h1>
                <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
