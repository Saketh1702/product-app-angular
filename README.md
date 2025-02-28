# Angular Product Application

This is an Angular application that displays a list of products and allows users to view detailed information about each product. The application features a responsive design with clean, modern UI elements.

## Features

- Product listing page with a grid layout
- Product detail page with information for each product
- Responsive design that works across different screen sizes
- Angular routing for navigation between views
- Standalone component architecture

## Demo

https://github.com/user-attachments/assets/e31d90f8-115c-40e6-9f1c-f7219b99479b




## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (version 14.x or higher) and npm (Node Package Manager)
- Angular CLI (Command Line Interface)

You can check if you have Node.js and npm installed by running these commands in your terminal:

```
node --version
```
Or
```
npm --version
```

If you don't have Angular CLI installed, you can install it globally using npm:

```
npm install -g @angular/cli
```
## How to Run the Application Locally

Clone the Repository

```
git clone https://github.com/yourusername/angular-product-app.git
cd product-app-angular
```
Install dependencies, Open a terminal in the root directory of the project (where the package.json file is located) and run:
```
npm install
```
After the installation completes, run:
```
ng serve
```
Or alternatively:
```
npm start
```

Once the compilation is complete, open your web browser and navigate to:

```
http://localhost:4200
```
## Application Structure
The application consists of the following main components:

- **ProductCardComponent**: Displays a compact view of a product in the product list
- **ProductListComponent**: Shows all products in a grid layout
- **ProductDetailComponent**: Displays detailed information about a specific product
- **ProductService**: Handles data fetching and management

## Navigation

- The home page automatically redirects to the products page (/products)
- Click on the "View Details" button on any product card to navigate to the product detail page (/products/:id)
- On the product detail page, use the "Back to Products" button to return to the product listing


## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
