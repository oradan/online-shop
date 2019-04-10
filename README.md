# online-shop
Online shop documentation

The shop can be accessed on following link : http://shop.friendshiptrustbank.com

Prerequisites:

Node.js version 8.x or 10.x.


npm package manager(which is installed with Node.js by default.)
Angular installed globaly(npm install -g @angular/cli)


To install the application dependencies run npm install
to start the aplication run npm start

Pet on-line shop is a web application developed using:
Angular v7
Bootstrap v4
Ng-bootstrap

There are two registered users:

Radan Olga => admin role
Username: olgaradan;
Password: 1234

Fabiana Panait => user
Username: fabianapanait
Pasword: 1234


The application is a prototype to be improved with:

0 Home page
•	Display dynamically  the images in the carousel,
•	Display the featured products in a carousel

1 Products page
•	The option to filter the products by category name, price range , color ,size

2 Product Details
•	Implement Related products feature, display in a carousel
•	Availability => dynamically display;
•	The possibility to choose the   size and color
•	The possibility to add the product to wish list

3 Orders page
•	To implement the option to see the order details (date/products/address….)

4 Shopping-cart page
•	To implement the option to see a personal order history and status.
•	The payment functionality

5 Registration functionality
6 Improve the login and add to cart code
7 Fetching data with resolvers
8 Implement an Interceptors Service in order to add headers to request
9 Implement an Order Trakker functionality in order to research the user preferences 
10 Implement the status functionality on orders pending or payd
11 At this stage the app is not responsive / implement the responsive design
12 Add browse/upload feature for the images 

App-flow

HOME PAGE => presentation page

PRODUCT PAGE => the page where Users can view all the products/filter the products and add to cart. By clicking the “add to cart icon” the item is added to the shopping cart and the shopping icon from menu display a red circle with the numbers of item in the current shopping-cart.  At this stage the items are saved on client-side, in the shopping-cart service, the users can see the shopping cart without being logged-in. To continue the order the user must log-in. The user have the possibility to see the product details by clicking the “details” button
Only the users with admin role can see the edit/delete buttons.  In order to login as admin please use the credentials below:  

Username: olgaradan / Password: 1234;
Otherwise:
Username: fabianapanait / Pasword: 1234

DETAILPAGE => The user can see the product details or add to cart. The users with admin role can also edit or delete the product. 

ORDERS PAGE/ ADD PRODUCT this pages can be accessed only by users with admin     role (olgaradan/1234) by clicking Add product button, the product is saved in database. To add images please use the following path "assets/images/toys-full/4.jpg" , the browse feature will be implemented as improvement

SHOPING CART => this page show current selected items. The user can edit the quantity and the total price is updated. If the user is not logged-in in order to continue he must log-in, to save the order user must click the button "continue" in this moment the order is saved in data base and the user can pay the order.  If the user did not accessed the “continue” button from shopping-cart, he did not want to buy at that moment, the order is saved in data base when the user log-out.



