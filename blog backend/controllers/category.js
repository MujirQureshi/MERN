const { Category, User } = require("../models");

const addCategory = async (req, res, next) => {
  try {
    const { title, desc } = req.body;
    const { _id } = req.user;

    const isCategoryExist = await Category.findOne({ title });
    if (isCategoryExist) {
      res.code = 400;
      throw new Error("Category already exist");
    }

    const user = await User.findById(_id);
    if (!user) {
      res.code = 404;
      throw new Error("User not found");
    }

    const newCategory = new Category({ title, desc, updatedBy: _id });
    await newCategory.save();

    res.status(200).json({
      code: 200,
      status: true,
      message: "Category added successfully",
    });
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;
    const { title, desc } = req.body;

    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({
        code: 404,
        status: false,
        message: "Category not found",
      });
    }

    // Check if a different category with the same title exists
    const isCategoryExist = await Category.findOne({
      title,
      _id: { $ne: category._id },
    });
    if (isCategoryExist) {
      return res.status(400).json({
        code: 400,
        status: false,
        message: "Title already exists",
      });
    }

    // Update fields
    category.title = title || category.title;
    category.desc = desc || category.desc;
    category.updatedBy = _id;

    await category.save();

    res.status(200).json({
      code: 200,
      status: true,
      message: "Category updated successfully",
      data: { category },
    });
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);
    if (!category) {
      res.code = 404;
      throw new Error("Category not found");
    }

    await Category.findByIdAndDelete(id);

    res.status(200).json({
      code: 200,
      staus: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const { q, size, page } = req.query;
    let query = {};

    const sizeNumber = parseInt(size) || 10;
    const pageNumber = parseInt(page) || 1;

    if (q) {
      const search = RegExp(q, "i");

      query = { $or: [{ title: search }, { desc: search }] };
    }

    const total = await Category.countDocuments(query);
    const pages = Math.ceil(total / sizeNumber);

    const categories = await Category.find(query)
      .skip((pageNumber - 1) * sizeNumber)
      .limit(sizeNumber)
      .sort({ _id: -1 });

    res.status(200).json({
      code: 200,
      status: true,
      message: "Get category list successfully",
      data: { categories, total, pages },
    });
  } catch (error) {
    next(error);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);
    if (!category) {
      res.code = 404;
      throw new Error("Category not found");
    }

    res.status(200).json({
      code: 200,
      status: true,
      message: "Get category successfully",
      data: { category },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addCategory,
  updateCategory,
  deleteCategory,
  getCategories,
  getCategory,
};
