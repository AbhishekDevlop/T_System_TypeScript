//Que No 1.
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.acceptDetails = function (Prod) {
        this.productName = Prod.productName;
        this.productId = Prod.productId;
        this.productPrice = Prod.productPrice;
    };
    Product.prototype.print = function () {
        console.log("Product Id : " + this.productId);
        console.log("Product Name : " + this.productName);
        console.log("Product Price : " + this.productPrice);
    };
    return Product;
}());
var values = {
    productName: 'Keyboard',
    productId: 10,
    productPrice: 123456
};
var product = new Product();
product.acceptDetails(values);
product.print();
//que no 2. Create an array of 5 string, display list, use sort, reverse, slice function using typescript
var color = ["Red", "Orange", "Pink", "White", "Blue"];
console.log(color.sort());
console.log(color.reverse());
console.log(color.slice(1, 3));
for (var i = 0; i < color.length; i++) {
    console.log(color[i]);
}
// que no 3
var Student = [1, "Abhishek"];
console.log(Student[0]);
console.log(Student[1]);
//
//# sourceMappingURL=Assignment.js.map