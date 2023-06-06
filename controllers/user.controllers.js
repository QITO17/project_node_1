const User = require('../models/user.model');

exports.findUser = async (req, res) => {
  const user = await User.findAll({
    where: {
      status: 'available',
    },
  });

  return res.json({
    mesagge: 'Felicidades',
    user,
  });
};

exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  return res.status(200).json({
    message: 'Usuario creado exitosamente 😁😀',
    mesagge2:"Gracias por escogernos >:D 🚑🛒🚘🏍🛵🚲",
    user,
  });
};

exports.findOneUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({
    where: {
      status: 'available',
      id,
    },
  });

  return res.json({
    user,
  });
};

exports.deleteOneUser = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const user = await User.findOne({
    where: {
      status: 'available',
      id,
    },
  });

  user.update({ status: 'desativado' });

  res.status(200).json({
    message: `Usuario cancelado exitosamente 😒☠☠`,
    user,
  });
};

exports.updateOneUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = await User.findOne({
    where: {
      status: 'available',
      id,
    },
  });

  user.update({ name, email });

  res.status(200).json({
    message: `Usuario completada exitosamente`,
    mesagge2:"😎🐱‍🏍🐱‍🐉 Att Arley Hurtado difruta tu moto 🏍🛵🏍",
    user,
  });
};
