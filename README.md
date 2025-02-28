# Angular Product Application

This is an Angular application that displays a list of products and allows users to view detailed information about each product. The application features a responsive design with clean, modern UI elements.

## Features

- Product listing page with a grid layout
- Product detail page with information for each product
- Responsive design that works across different screen sizes
- Angular routing for navigation between views
- Standalone component architecture

## Demo


https://github.com/user-attachments/assets/72e7e193-75ec-444f-890c-450dcbc0637e


## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (version 14.x or higher) and npm (Node Package Manager)
- Angular CLI (Command Line Interface)
## Check if Node.js is installed
First, let's check if you already have Node.js installed on your computer:

For Windows users:

- Open Command Prompt (search for "cmd" in the Start menu)
- Type ```node --version``` and press Enter
- Type ```npm --version``` and press Enter

For Mac users:

- Open Terminal (find it in Applications > Utilities > Terminal)
- Type ```node --version``` and press Enter
- Type ```npm --version``` and press Enter

If you see version numbers displayed (like v18.16.0 for Node.js and 9.5.1 for npm), you already have Node.js installed. You can skip to the "Installing Angular CLI" section.

## Install Node.js (if not already installed)

If you don't see version numbers or get an error message, you need to install Node.js:
For Windows:

- Go to https://nodejs.org/
- Download the "LTS" (Long Term Support) version
- Run the downloaded installer
- Follow the installation wizard, accepting the default settings
- Make sure the option to "Automatically install the necessary tools" is checked
- Click "Install" and wait for the installation to complete
- Restart your computer to ensure Node.js is properly installed

For Mac:

- Go to https://nodejs.org/
- Download the "LTS" version
- Run the downloaded installer package
- Follow the installation wizard
- Enter your admin password if prompted
- Restart your computer when installation finishes

## Verify installation:

After restarting your computer, open Command Prompt (Windows) or Terminal (Mac) and type:
```
node --version
npm --version
```
You should now see version numbers, confirming Node.js is installed.

## Installing Angular CLI

Angular CLI (Command Line Interface) is a tool that helps you create and manage Angular projects.

- Open Command Prompt (Windows) or Terminal (Mac)
- Type the following command and press Enter:
```
npm install -g @angular/cli
```
This may take a few minutes to complete. When finished, verify installation by typing:
```
ng version
```
You should see information about the Angular CLI version

## Getting and Running the Product App
### 1. Download the repository

#### Option 1: Using Git (if you have Git installed):

- Open Command Prompt (Windows) or Terminal (Mac)
- Navigate to the folder where you want to store the project
- Type:
```
  git clone https://github.com/Saketh1702/product-app-angular.git
```

#### Option 2: Download as ZIP:

- Go to https://github.com/Saketh1702/product-app-angular
- Click the green "Code" button
- Select "Download ZIP"
- Extract the ZIP file to a location on your computer

### 2. Install project dependencies

- Open Command Prompt (Windows) or Terminal (Mac)
- Type in the below command Navigate to the project folder:
```
cd path/to/product-app-angular
```
(Replace "path/to" with the actual path where you saved the project)

- Install the required dependencies:
```
  npm install
```
- Wait for the installation to complete (this may take several minutes)

## 3. Run the application

- In the same Command Prompt or Terminal window, still in the project folder, type:
```
ng serve
```
- Wait for the application to compile - you'll see a message saying "Compiled successfully" when it's ready
- Open your web browser (Chrome, Firefox, Edge, etc.)
- Enter this address in the browser:
```
  http://localhost:4200
```
- You should now see the Product App running in your browser!

## 4. Using the application

- The home page automatically displays all available products
- Click on "View Details" on any product card to see more information about that product
- Use the "Back to Products" button to return to the product listing

## Troubleshooting
### If you get an error about port 4200 being in use:

- Try a different port by running:
```
ng serve --port 4201
```
- Then access the app at "http://localhost:4201"

### If you see compilation errors:

- Make sure you followed all steps correctly
- Try closing the Command Prompt/Terminal and starting over
- Ensure you're in the correct project directory when running commands

### If the application doesn't display properly:

- Try using a different browser
- Clear your browser cache or use incognito/private browsing mode

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
