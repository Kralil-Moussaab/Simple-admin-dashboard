import classNames from "classnames";
import { Link } from "react-router-dom";

const popularProducts = [
  {
    id: "3432",
    product_name: 'Macbook M1 Pro 14"',
    product_thumbnail:
      "https://m.media-amazon.com/images/I/51hJIsWMagL._AC_UF1000,1000_QL80_.jpg",
    product_price: "$1499.00",
    product_stock: 341,
  },
  {
    id: "7633",
    product_name: "Samsung Galaxy Buds 2",
    product_thumbnail:
      "https://m.media-amazon.com/images/I/51BOYHNPVyL._AC_UF894,1000_QL80_.jpg",
    product_price: "$399.00",
    product_stock: 24,
  },
  {
    id: "6534",
    product_name: "Asus Zenbook Pro",
    product_thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaX6sHwIB2AsWcAkc-fzKvRhmSpNMO57KI7Q&s",
    product_price: "$899.00",
    product_stock: 56,
  },
  {
    id: "9234",
    product_name: "LG Flex Canvas",
    product_thumbnail:
      "https://img.freepik.com/vecteurs-libre/affichage-realiste-pour-smartphone-differentes-applications_52683-30241.jpg",
    product_price: "$499.00",
    product_stock: 98,
  },
  {
    id: "4314",
    product_name: "Apple Magic Touchpad",
    product_thumbnail:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111884_SP729_magic_trackpad_2.png",
    product_price: "$699.00",
    product_stock: 0,
  },
  {
    id: "4342",
    product_name: "Nothing Earbuds One",
    product_thumbnail:
      "https://i.ebayimg.com/images/g/fL8AAOSwRc9kHVSA/s-l1200.jpg",
    product_price: "$399.00",
    product_stock: 453,
  },
];

function PopularProducts() {
  return (
    <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
      <strong className="text-gray-700 font-medium">Popular Products</strong>
      <div className="mt-4 flex flex-col gap-3">
        {popularProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex items-start hover:no-underline"
          >
            <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
              <img
                className="w-full h-full object-cover rounded-sm"
                src={product.product_thumbnail}
                alt={product.product_name}
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{product.product_name}</p>
              <span
                className={classNames(
                  product.product_stock === 0
                    ? "text-red-500"
                    : product.product_stock > 50
                    ? "text-green-500"
                    : "text-orange-500",
                  "text-xs font-medium"
                )}
              >
                {product.product_stock === 0
                  ? "Out of Stock"
                  : product.product_stock + " in Stock"}
              </span>
            </div>
            <div className="text-xs text-gray-400 pl-1.5">
              {product.product_price}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
