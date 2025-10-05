// src/component/ItemList.js
import { CDN_URL } from "../utils/constant";

const ItemList = ({ items = [], onRemove }) => {
  return (
    <div className="space-y-4">
      {items.length > 0 ? (
        items.map((item) => (
          <div
            key={item?.info?.id || item?.id}
            className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm"
          >
            {item?.info?.cloudinaryImageId && (
              <img
                src={`${CDN_URL}${item?.info?.cloudinaryImageId}`}
                alt={item?.info?.name || "item"} // Fixed syntax error here
                className="w-16 h-16 object-cover rounded mr-4"
              />
            )}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {item?.info?.name || item?.name || "Unnamed Item"}
              </h3>
              <p className="text-gray-600">
                ₹{(item?.info?.price || item?.info?.defaultPrice || 0) / 100}
              </p>
            </div>
            {onRemove && (
              <button
                onClick={() => onRemove(item?.info?.id || item?.id)}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
              >
                Remove
              </button>  
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-600">No items in cart</p>
      )}
    </div>
  );
};

export default ItemList;