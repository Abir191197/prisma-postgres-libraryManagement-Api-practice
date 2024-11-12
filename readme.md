# Library Management System API

**Objective:** A backend API for a Library Management System allowing staff and members to manage books, memberships, and borrowing activities. Built with Node.js, Prisma ORM, PostgreSQL, and Express.js, this API supports CRUD operations for books, members, and borrow records with UUID-based unique identifiers.

## Additional Information

- **Live URL**: [\[Live Link \]](https://prisma-postgres-library-management-api-practice.vercel.app/)

## Technologies Used


![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma ORM](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Postman API Documentation

You can view the full API documentation for this project on Postman:

## Postman API Documentation

You can view the full API documentation for this project on Postman [HERE](https://documenter.getpostman.com/view/31700576/2sAY547JzC).


## Database Schema
- **Book Table:** Manages book records (e.g., title, genre, availability)
- **Member Table:** Manages library members (e.g., name, email, membership details)
- **BorrowRecord Table:** Tracks borrowing activities with references to books and members

## Key Features & Endpoints
### Book Management
- **Create Book**: `POST /api/books`
- **Get All Books**: `GET /api/books`
- **Get Book by ID**: `GET /api/books/:bookId`
- **Update Book**: `PUT /api/books/:bookId`
- **Delete Book**: `DELETE /api/books/:bookId`

### Member Management
- **Create Member**: `POST /api/members`
- **Get All Members**: `GET /api/members`
- **Get Member by ID**: `GET /api/members/:memberId`
- **Update Member**: `PUT /api/members/:memberId`
- **Delete Member**: `DELETE /api/members/:memberId`

### Borrow & Return Books
- **Borrow Book**: `POST /api/borrow`
- **Return Book**: `POST /api/return`
- **Overdue List**: `GET /api/borrow/overdue`

### Error Handling
Unified structure for error responses with `success`, `status`, and `message` fields.

## Setup Instructions
1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up PostgreSQL and Prisma ORM.
4. Run migrations: `npx prisma migrate dev`
5. Start the server: `npm start`

## Known Issues
- **Overdue Tracking:** Currently set for a 14-day return policy but may require customization for variable return policies.


  
---

This API is structured for scalability, with clean code and organized comments for easy navigation.
