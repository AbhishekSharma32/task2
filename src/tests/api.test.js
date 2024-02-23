import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Mock API response
const mockProductList = [
  {
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
    images: ['...', '...', '...']
  },
  // Add more mock products as needed
];

describe('API Test', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios); // Initialize the mock adapter
  });

  afterEach(() => {
    mock.reset(); // Reset the mock adapter after each test
  });

  test('Fetch products', async () => {
    // Mock GET request to /api/products
    mock.onGet('/products').reply(200, { products: mockProductList });

    // Make the API request
    const response = await axios.get('/api/products');

    // Verify the response
    expect(response.status).toBe(200);
    expect(response.data.products).toEqual(mockProductList);
  });
});
