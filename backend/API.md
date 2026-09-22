# E-Commerce Product and Order APIs

Base URL:

http://localhost:5000

---

# Product APIs

## 1. Get All Products

### Request

GET /api/products

### Example

GET http://localhost:5000/api/products

### Expected Response

Status: 200 OK

Returns the list of products.

---

## 2. Get Product By ID

### Request

GET /api/products/:id

### Example

GET http://localhost:5000/api/products/1

### Expected Response

Status: 200 OK

Returns the requested product.

---

## 3. Get Invalid Product

### Example

GET http://localhost:5000/api/products/999

### Expected Response

Status: 404 Not Found

```json
{
    "success": false,
    "message": "Product not found"
}