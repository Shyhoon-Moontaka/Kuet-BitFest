exports.createRecipe = (req, res) => {
  try {
    res.status(200).json({
      message: "File Uploaded Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
