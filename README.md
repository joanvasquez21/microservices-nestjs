<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Microservices - Products

This is a product management microservice built with NestJS. It includes functionality for creating, reading, updating, and deleting products, and uses Prisma to interact with the database. Additionally, it implements validations and pagination for queries, along with a microservice architecture using TCP transport.

#### Features
Product CRUD: Create, read, update, and delete products.
Pagination: Query products with pagination support and metadata.
Microservice Architecture: Configured to run as an independent microservice using TCP transport.
Validations: Request data validation using class-validator and class-transformer.
Database Integration: Prisma is used to handle database interactions.
Modular Structure: Organized with modular design (ProductsModule).

#### Installation
Follow these steps to run the project locally:

1. Clone the Repository
```
git clone https://github.com/your-username/microservices-nestjs.git
```
2. Install Dependencies
```
npm install
```
3. Configure Environment Variables
Create a .env file in the root of the project and define the following variables:
```
PORT=3000
DATABASE_URL=your_database_url_here
```
4.  Run Prisma Migrations
```
npx prisma migrate dev
```
5. Start the Microservice
```
npm run start:microservices
```


#### Technologies Used
- prisma
- nestjs
- class-validator
