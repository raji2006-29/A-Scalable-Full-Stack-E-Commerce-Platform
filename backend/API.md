# Product API Documentation

Base URL:

http://localhost:5000/api/products

---

## 1. GET All Products

### Request

GET /api/products

### Example

http://localhost:5000/api/products

### Description

Returns all products.

---

## 2. GET Product by ID

### Request

GET /api/products/:id

### Example

http://localhost:5000/api/products/1

### Description

Returns a single product using its ID.

---

## 3. CREATE Product

### Request

POST /api/products

### Example

http://localhost:5000/api/products

### Request Body

```json
{
    "name": "Keyboard",
    "description": "Mechanical Keyboard",
    "price": 3000,
    "category": "Electronics",
    "stock": 15
}
---

# Order API

Base URL:

http://localhost:5000/api/orders

---

## 1. CREATE ORDER

### Request

POST /api/orders

### Example

POST http://localhost:5000/api/orders

### Request Body

```json
{
    "customerName": "Meghana",
    "customerEmail": "meghana@example.com",
    "items": [
        {
            "productId": 1,
            "productName": "Laptop",
            "quantity": 1,
            "price": 55000
        }
    ],
    "totalAmount": 55000
}