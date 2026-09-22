let orders = [];

// Allowed order statuses
const allowedStatuses = [
    "Pending",
    "Confirmed",
    "Shipped",
    "Delivered",
    "Cancelled"
];


// CREATE ORDER
exports.createOrder = (req, res) => {
    const {
        customerName,
        customerEmail,
        items,
        totalAmount
    } = req.body;

    // Required field validation
    if (
        !customerName ||
        !customerEmail ||
        !items ||
        totalAmount === undefined
    ) {
        return res.status(400).json({
            success: false,
            message: "All order fields are required"
        });
    }

    // Order items validation
    if (!Array.isArray(items) || items.length === 0) {
        return res.status(400).json({
            success: false,
            message: "Order must contain at least one item"
        });
    }

    // Total amount validation
    if (
        typeof totalAmount !== "number" ||
        totalAmount <= 0
    ) {
        return res.status(400).json({
            success: false,
            message: "Total amount must be a number greater than 0"
        });
    }

    const newOrder = {
        id: orders.length > 0
            ? orders[orders.length - 1].id + 1
            : 1,

        customerName,
        customerEmail,

        items: items,

        totalAmount,

        status: "Pending"
    };

    orders.push(newOrder);

    res.status(201).json({
        success: true,
        message: "Order created successfully",
        order: newOrder
    });
};


// GET ALL ORDERS
exports.getOrders = (req, res) => {
    res.status(200).json({
        success: true,
        count: orders.length,
        orders: orders
    });
};


// GET ORDER BY ID
exports.getOrderById = (req, res) => {
    const id = Number(req.params.id);

    const order = orders.find(order => order.id === id);

    if (!order) {
        return res.status(404).json({
            success: false,
            message: "Order not found"
        });
    }

    res.status(200).json({
        success: true,
        order: order
    });
};


// UPDATE ORDER STATUS
exports.updateOrderStatus = (req, res) => {
    const id = Number(req.params.id);

    const order = orders.find(order => order.id === id);

    if (!order) {
        return res.status(404).json({
            success: false,
            message: "Order not found"
        });
    }

    const { status } = req.body;

    // Check whether status is provided
    if (!status) {
        return res.status(400).json({
            success: false,
            message: "Order status is required"
        });
    }

    // Check whether status is valid
    if (!allowedStatuses.includes(status)) {
        return res.status(400).json({
            success: false,
            message:
                "Invalid status. Allowed statuses are: Pending, Confirmed, Shipped, Delivered, Cancelled"
        });
    }

    order.status = status;

    res.status(200).json({
        success: true,
        message: "Order status updated successfully",
        order: order
    });
};


// DELETE ORDER
exports.deleteOrder = (req, res) => {
    const id = Number(req.params.id);

    const orderIndex = orders.findIndex(
        order => order.id === id
    );

    if (orderIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Order not found"
        });
    }

    const deletedOrder = orders.splice(orderIndex, 1);

    res.status(200).json({
        success: true,
        message: "Order deleted successfully",
        order: deletedOrder[0]
    });
};