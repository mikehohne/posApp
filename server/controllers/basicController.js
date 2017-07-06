const basicController = {};

basicController.get = (req,res) => {
  res.json({
    success: true,
    data: [],
    message: 'Welcome to the POS App by Mike Hohne: Please Use as a prefix /api',
  });
};

export default basicController;
