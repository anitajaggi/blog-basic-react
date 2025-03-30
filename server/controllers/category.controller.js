import Category from "../models/category.model.js";

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Category({ name });
    await category.save();
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: "Error adding category", error });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({ status: true });
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch categories", error });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.findById(req.params.catid);
    if (!category)
      return res.status(404).json({ message: "Category not found!" });

    category.name = name || category.name;

    await category.save();
    return res.json({ category });
  } catch (error) {
    return res.status(500).json({ message: "Error updating category", error });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { catDelId } = req.params;
    const category = await Category.findById(catDelId);
    if (!category)
      return res.status(404).json({ message: "Category Not found" });
    category.status = false;
    await category.save();
    return res.json({ category });
  } catch (error) {
    return res.status(500).json({ error: "Server Error" });
  }
};
