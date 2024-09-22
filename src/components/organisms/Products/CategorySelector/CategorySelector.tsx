'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export const CategorySelector = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'electronics';

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = event.target.value;
    const url = `/products/?category=${newCategory}`;
    router.push(url);
  };

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="electronics">電子機器</option>
        <option value="furniture">家具</option>
        <option value="clothing">衣類</option>
      </select>
    </div>
  );
};
