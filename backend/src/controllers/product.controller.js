import Product from "../models/product.model.js";

// GET /products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().limit(20);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// GET /search?q=term
export const searchProducts = async (req, res) => {
  try {
    const term = req.query.q;

    if (!term) {
      return res.json([]);
    }

    const products = await Product.find({
      name: { $regex: term, $options: "i" } // case-insensitive partial match
    }).limit(5);

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
};

// GET /products with pagination + filters + sorting
export const getFilteredProducts = async (req, res) => {
  try {
    // Pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Filters
    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    if (req.query.rating) filter.rating = { $gte: Number(req.query.rating) };
    if (req.query.minPrice && req.query.maxPrice) {
      filter.price = {
        $gte: Number(req.query.minPrice),
        $lte: Number(req.query.maxPrice)
      };
    }

    // Sorting
    let sort = {};
    if (req.query.sort) {
      const order = req.query.order === "desc" ? -1 : 1;
      sort[req.query.sort] = order;
    }

    const products = await Product.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Product.countDocuments(filter);

    res.json({
      page,
      total,
      totalPages: Math.ceil(total / limit),
      products
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};


export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to add product" });
  }
};


export const createMultipleProducts = async (req, res) => {
  try {
    const products = await Product.insertMany(req.body);
    res.status(201).json({ count: products.length, products });
  } catch (err) {
    res.status(500).json({ error: "Failed to insert products" });
  }
};


export const getCategories = async (req, res) => {
  try {
    const categories = await Product.distinct("category");
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};
