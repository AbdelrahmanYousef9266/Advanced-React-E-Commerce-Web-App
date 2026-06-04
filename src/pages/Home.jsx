import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../components/ProductCard.jsx';
import CategoryFilter from '../components/CategoryFilter.jsx';
import { fetchAllProducts, fetchProductsByCategory } from '../services/api.js';
import './Home.css';

function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">🔍</span>
        <p>No products found.</p>
      </div>
    );
  }
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const allProductsQuery = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
    enabled: selectedCategory === '',
  });

  const categoryProductsQuery = useQuery({
    queryKey: ['products', selectedCategory],
    queryFn: () => fetchProductsByCategory(selectedCategory),
    enabled: selectedCategory !== '',
  });

  const activeQuery = selectedCategory === '' ? allProductsQuery : categoryProductsQuery;
  const { data: products, isLoading, isError, error } = activeQuery;

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1 className="hero-title">Discover Our Collection</h1>
        <p className="hero-subtitle">
          Explore top-quality products across all categories
        </p>
      </div>

      <div className="home-controls">
        <CategoryFilter selected={selectedCategory} onChange={setSelectedCategory} />
        {products && (
          <span className="product-count">
            {products.length} product{products.length !== 1 ? 's' : ''} found
          </span>
        )}
      </div>

      {isLoading && (
        <div className="loading-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-image" />
              <div className="skeleton-lines">
                <div className="skeleton-line long" />
                <div className="skeleton-line medium" />
                <div className="skeleton-line short" />
              </div>
            </div>
          ))}
        </div>
      )}

      {isError && (
        <div className="error-state">
          <span className="error-icon">⚠️</span>
          <h3>Failed to load products</h3>
          <p>{error?.message || 'Please check your connection and try again.'}</p>
        </div>
      )}

      {!isLoading && !isError && products && (
        <ProductGrid products={products} />
      )}
    </div>
  );
}

export default Home;
