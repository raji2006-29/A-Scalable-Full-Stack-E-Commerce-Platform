let products = [
    {
        id: 1,
        name: "Laptop",
        description: "HP Laptop",
        price: 55000,
        category: "Electronics",
        stock: 10
    },
    {
        id: 2,
        name: "Headphones",
        description: "Wireless Headphones",
        price: 2000,
        category: "Electronics",
        stock: 20
    }
];

// GET all products
// Supports search, category, price filter, sorting and pagination
exports.getProducts = (req, res) => {
    const {
        search,
        category,
        minPrice,
        maxPrice,
        sort
    } = req.query;

    // Pagination values
    const page = req.query.page === undefined
        ? 1
        : Number(req.query.page);

    const limit = req.query.limit === undefined
        ? 10
        : Number(req.query.limit);

    // Validate page
    if (!Number.isInteger(page) || page < 1) {
        return res.status(400).json({
            success: false,
            message: "Page must be a positive integer"
        });
    }

    // Validate limit
    if (!Number.isInteger(limit) || limit < 1) {
        return res.status(400).json({
            success: false,
            message: "Limit must be a positive integer"
        });
    }

    let filteredProducts = [...products];

    // Search by product name
    if (search) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    // Filter by category
    if (category) {
        filteredProducts = filteredProducts.filter(product =>
            product.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Minimum price filter
    if (minPrice !== undefined) {
        filteredProducts = filteredProducts.filter(product =>
            product.price >= Number(minPrice)
        );
    }

    // Maximum price filter
    if (maxPrice !== undefined) {
        filteredProducts = filteredProducts.filter(product =>
            product.price <= Number(maxPrice)
        );
    }

    // Sorting
    if (sort === "price_asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sort === "price_desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (sort === "name_asc") {
        filteredProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    if (sort === "name_desc") {
        filteredProducts.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    }

    // Total number of products after filtering
    const totalProducts = filteredProducts.length;

    // Calculate starting index
    const startIndex = (page - 1) * limit;

    // Calculate ending index
    const endIndex = startIndex + limit;

    // Get products for current page
    const paginatedProducts = filteredProducts.slice(
        startIndex,
        endIndex
    );

    // Calculate total pages
    const totalPages = Math.ceil(totalProducts / limit);

    res.status(200).json({
        success: true,
        count: paginatedProducts.length,
        totalProducts: totalProducts,
        page: page,
        limit: limit,
        totalPages: totalPages,
        products: paginatedProducts
    });
};


// GET product by ID
exports.getProductById = (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(product => product.id === id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    res.status(200).json({
        success: true,
        product: product
    });
};


// CREATE product
exports.createProduct = (req, res) => {
    const {
        name,
        description,
        price,
        category,
        stock
    } = req.body;

    // Required field validation
    if (
        !name ||
        !description ||
        !category ||
        price === undefined ||
        stock === undefined
    ) {
        return res.status(400).json({
            success: false,
            message: "All product fields are required"
        });
    }

    // Price validation
    if (typeof price !== "number" || price <= 0) {
        return res.status(400).json({
            success: false,
            message: "Price must be a number greater than 0"
        });
    }

    // Stock validation
    if (typeof stock !== "number" || stock < 0) {
        return res.status(400).json({
            success: false,
            message: "Stock must be a number greater than or equal to 0"
        });
    }

    const newProduct = {
        id: products.length > 0
            ? products[products.length - 1].id + 1
            : 1,
        name,
        description,
        price,
        category,
        stock
    };

    products.push(newProduct);

    res.status(201).json({
        success: true,
        message: "Product created successfully",
        product: newProduct
    });
};


// UPDATE product
exports.updateProduct = (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(product => product.id === id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    const {
        name,
        description,
        price,
        category,
        stock
    } = req.body;

    // Price validation
    if (
        price !== undefined &&
        (typeof price !== "number" || price <= 0)
    ) {
        return res.status(400).json({
            success: false,
            message: "Price must be a number greater than 0"
        });
    }

    // Stock validation
    if (
        stock !== undefined &&
        (typeof stock !== "number" || stock < 0)
    ) {
        return res.status(400).json({
            success: false,
            message: "Stock must be a number greater than or equal to 0"
        });
    }

    if (name !== undefined) {
        product.name = name;
    }

    if (description !== undefined) {
        product.description = description;
    }

    if (price !== undefined) {
        product.price = price;
    }

    if (category !== undefined) {
        product.category = category;
    }

    if (stock !== undefined) {
        product.stock = stock;
    }

    res.status(200).json({
        success: true,
        message: "Product updated successfully",
        product: product
    });
};


// DELETE product
exports.deleteProduct = (req, res) => {
    const id = Number(req.params.id);

    const productIndex = products.findIndex(
        product => product.id === id
    );

    if (productIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(productIndex, 1);

    res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        product: deletedProduct[0]
    });
};