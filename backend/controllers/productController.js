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
// GET all products with search and category filter
exports.getProducts = (req, res) => {
    const { search, category } = req.query;

    let filteredProducts = products;

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

    res.status(200).json({
        success: true,
        count: filteredProducts.length,
        products: filteredProducts
    });
};
// CREATE product
exports.createProduct = (req, res) => {
    const { name, description, price, category, stock } = req.body;

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

    const { name, description, price, category, stock } = req.body;

    // Price validation
    if (price !== undefined && (typeof price !== "number" || price <= 0)) {
        return res.status(400).json({
            success: false,
            message: "Price must be a number greater than 0"
        });
    }

    // Stock validation
    if (stock !== undefined && (typeof stock !== "number" || stock < 0)) {
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

    const productIndex = products.findIndex(product => product.id === id);

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