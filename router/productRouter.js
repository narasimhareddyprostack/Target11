const express = require("express");
const router = express.Router();
const Product = require("../model/Product");

/*
    API: localhost:5000/product/upload
    Method:POST
    Type:private
    Fields: name, brand, image, price, qty, category, desc,usage
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

router.get("/", (req, res) => {});

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

module.exports = router;
