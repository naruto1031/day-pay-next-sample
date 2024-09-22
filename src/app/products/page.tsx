import { CategorySelector }from '@/components/organisms/Products/CategorySelector';

async function fetchProducts(category: string) {
  const res = await fetch(`http://localhost:3000/api/products?category=${category}`);
  const data = await res.json();
  return data.products;
}

export default async function ProductsPage({searchParams}: {
    searchParams: { [key: string]: string | undefined }
}) {
  const category = searchParams.category || "electronics"
  const products = await fetchProducts(category);

  return (
    <div>
      <h1>カテゴリ: {category}</h1>
      <CategorySelector />
        <ul>
            {products.map((product: { id: number; name: string }) => (
            <li key={product.id}>{product.name}</li>
            ))}
        </ul>
    </div>
  );
}
