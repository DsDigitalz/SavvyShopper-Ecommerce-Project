const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://dummyjson.com";

/**
 * Normalizes product data received from API to standard app format
 */
export const normalizeProduct = (item) => {
  if (!item) return null;

  const discountPercentage = item.discountPercentage || 15;
  const originalPriceNum = Math.round(item.price / (1 - discountPercentage / 100));

  return {
    id: item.id,
    name: item.title || item.name || "Electronic Product",
    title: item.title || item.name || "Electronic Product",
    price: Number(item.price) || 0,
    formattedPrice: `$${item.price}`,
    originalPriceNumber: originalPriceNum,
    originalPrice: `$${originalPriceNum}`,
    discount: `-${Math.round(discountPercentage)}%`,
    discountPercentage: Math.round(discountPercentage),
    image: item.thumbnail || (item.images && item.images[0]) || "/bag.png",
    images: item.images && item.images.length > 0 ? item.images : [item.thumbnail || "/bag.png"],
    rating: item.rating || 4.5,
    ratingCount: item.reviews ? item.reviews.length * 15 + 8 : 42,
    stock: item.stock ?? 15,
    category: item.category || "electronics",
    brand: item.brand || "SavvyTech",
    description: item.description || "Premium electronics gadget engineered for top performance and reliability.",
    tags: item.tags || ["electronics", "gadget"],
    availabilityStatus: item.availabilityStatus || (item.stock > 0 ? "In Stock" : "Out of Stock"),
    reviews: item.reviews || [],
    warrantyInformation: item.warrantyInformation || "1 Year Manufacturer Warranty",
    shippingInformation: item.shippingInformation || "Free Express Delivery available",
    returnPolicy: item.returnPolicy || "30 Days Money Back Guarantee",
  };
};

/**
 * Fetches list of products with optional query, category, pagination, and sorting params
 */
export const fetchProducts = async ({
  category = "",
  search = "",
  limit = 100,
  skip = 0,
  sortBy = "",
  order = "asc",
} = {}) => {
  try {
    let url = `${API_BASE_URL}/products?limit=${limit}&skip=${skip}`;

    if (search && search.trim() !== "") {
      url = `${API_BASE_URL}/products/search?q=${encodeURIComponent(search.trim())}&limit=${limit}`;
    } else if (category && category !== "all") {
      url = `${API_BASE_URL}/products/category/${encodeURIComponent(category)}?limit=${limit}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data = await response.json();
    let normalized = (data.products || []).map(normalizeProduct);

    // Tech/Gadget relevant categories filtering if no specific search query
    // If fetching all products, prioritize tech & gadgets categories
    const techCategories = [
      "smartphones",
      "laptops",
      "mobile-accessories",
      "tablets",
      "mens-watches",
      "womens-watches",
      "sports-accessories",
    ];

    if (!category && !search) {
      const techProducts = normalized.filter((p) =>
        techCategories.includes(p.category.toLowerCase())
      );
      if (techProducts.length > 0) {
        // Put tech products first
        const nonTech = normalized.filter(
          (p) => !techCategories.includes(p.category.toLowerCase())
        );
        normalized = [...techProducts, ...nonTech];
      }
    }

    // Client-side sorting if needed
    if (sortBy === "price") {
      normalized.sort((a, b) =>
        order === "asc" ? a.price - b.price : b.price - a.price
      );
    } else if (sortBy === "rating") {
      normalized.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "title") {
      normalized.sort((a, b) =>
        order === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title)
      );
    }

    return {
      products: normalized,
      total: data.total || normalized.length,
      skip: data.skip || 0,
      limit: data.limit || limit,
    };
  } catch (error) {
    console.error("Error in fetchProducts:", error);
    throw error;
  }
};

/**
 * Fetches single product details by ID
 */
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product details for ID ${id}`);
    }
    const data = await response.json();
    return normalizeProduct(data);
  } catch (error) {
    console.error(`Error in fetchProductById(${id}):`, error);
    throw error;
  }
};

/**
 * Fetches category list from API
 */
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetchCategories:", error);
    // Fallback tech categories if API call fails
    return [
      { slug: "smartphones", name: "Smartphones" },
      { slug: "laptops", name: "Laptops & PCs" },
      { slug: "mobile-accessories", name: "Accessories" },
      { slug: "tablets", name: "Tablets" },
      { slug: "mens-watches", name: "Smartwatches" },
    ];
  }
};
