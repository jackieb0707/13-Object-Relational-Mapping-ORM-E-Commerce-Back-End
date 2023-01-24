// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongs to category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// categories have many products
Category.belongsTo(Product, {
  foreignKey: 'category_id',
});

// Product belongsToMany Tags (through ProductTag)
Product.Many(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

//  Tags belongsToMany Products (through ProductTag)
Product.belongsToMany(product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
