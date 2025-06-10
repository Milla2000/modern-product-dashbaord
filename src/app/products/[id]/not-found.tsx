export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold mb-2 text-red-600">
        Product Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Sorry, the product you’re looking for doesn’t exist.
      </p>
    </div>
  );
}
