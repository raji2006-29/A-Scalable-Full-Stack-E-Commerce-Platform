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