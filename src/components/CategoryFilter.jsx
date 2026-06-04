import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../services/api.js';
import './CategoryFilter.css';

function CategoryFilter({ selected, onChange }) {
  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: Infinity,
  });

  return (
    <div className="category-filter">
      <label htmlFor="category-select" className="filter-label">
        Filter by Category
      </label>
      <div className="select-wrapper">
        <select
          id="category-select"
          value={selected}
          onChange={(e) => onChange(e.target.value)}
          className="category-select"
          disabled={isLoading || isError}
        >
          <option value="">All Products</option>
          {isLoading && <option disabled>Loading categories...</option>}
          {isError && <option disabled>Failed to load categories</option>}
          {categories &&
            categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
        </select>
        <span className="select-arrow">▾</span>
      </div>
    </div>
  );
}

export default CategoryFilter;
