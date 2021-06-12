const express = require("express");
const router = express.Router();
const Product = require("../model/Product");

/*
    API: localhost:5000/product/upload
    Method:POST
    Type:private
    Fields: name, brand, image, price, qty, category, desc,usage
    Access : PRIVATE
*/
router.post("/upload", async (req, res) => {
  try {
    //read form data - product data
    let { name, brand, image, price, qty, category, desc, usage } = req.body;
    console.log(name, "Product Name");
    let newProduct = new Product({
      name,
      brand,
      image,
      price,
      qty,
      category,
      desc,
      usage,
    });
    console.log(newProduct);
    newProduct = await newProduct.save();
    res.status(200).json({ result: "success", product: newProduct });
  } catch (err) {
    if (err) throw err;
  }
});

router.get("/mobile", async (req, res) => {
  try {
    let product = await Product.find({ category: "Mobile" });

    res.status(200).json({ product: product });
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ status: "Server Error" });
  }
});
router.get("/watches", async (req, res) => {
  try {
    let product = await Product.find({ category: "Watches" });

    res.status(200).json({ product: product });
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ status: "Server Error" });
  }
});
router.get("/laptops", async (req, res) => {
  try {
    let product = await Product.find({ category: "Laptops" });

    res.status(200).json({ product: product });
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ status: "Server Error" });
  }
});

/*
  API: localhost:5000/product/:id
       localhost:5000/product/60c21065ac538219e818c681
         - Detail product API
  Method:GET
  Access Type: Public/Private
*/
router.get("/:id", async (req, res) => {
  try {
    //How to read url parameter
    let productId = req.params.id;
    let product = await Product.findOne({ _id: productId });
    /* console.log(productId);
    console.log(product); */
    res.status(200).json(product);
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ msg: "Server Error" });
  }
});
module.exports = router;
