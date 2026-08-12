\# Product API Documentation



\## Base URL



http://localhost:5000



\---



\## 1. Get All Products



\### Request



GET /api/products



\### Full URL



http://localhost:5000/api/products



\### Response



{

&#x20;   "success": true,

&#x20;   "products": \[]

}



\---



\## 2. Create Product



\### Request



POST /api/products



\### Full URL



http://localhost:5000/api/products



\### Request Body



{

&#x20;   "name": "Mouse",

&#x20;   "description": "Wireless Mouse",

&#x20;   "price": 800,

&#x20;   "category": "Electronics",

&#x20;   "stock": 25

}



\### Success Response



{

&#x20;   "success": true,

&#x20;   "message": "Product created successfully",

&#x20;   "product": {}

}



\---



\## 3. Update Product



\### Request



PUT /api/products/:id



\### Example



PUT /api/products/3



\### Request Body



{

&#x20;   "price": 1000,

&#x20;   "stock": 30

}



\---



\## 4. Delete Product



\### Request



DELETE /api/products/:id



\### Example



DELETE /api/products/3



\---



\## Validation



The following fields are required when creating a product:



\- name

\- description

\- price

\- category

\- stock



Price must be greater than 0.



Stock must be greater than or equal to 0.



\---



\## Error Handling



For an invalid route:



GET /api/abc



Response:



{

&#x20;   "success": false,

&#x20;   "message": "Route not found"

}

