
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Product from '../components/Product';

describe('Product Component', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  test('renders product data', async () => {
    // Mock API response
    const mockProduct = {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: '...',
    };
    mock.onGet('/products').reply(200, { products: [mockProduct] });

    // Render the Product component
    render(<Product />);

    // Wait for the product data to be rendered
    await waitFor(() => {
      expect(screen.getByText('iPhone 9')).toBeInTheDocument();
      expect(screen.getByText('An apple mobile which is nothing like apple')).toBeInTheDocument();
      // Add more assertions as needed for other fields
    });

    // Additional tests for API response
    const apiResponse = await axios.get('/api/products');
    expect(apiResponse.status).toEqual(200);
    expect(apiResponse.data.products.length).toBeGreaterThan(0);
    // Add more assertions as needed for API response
  });
});
  