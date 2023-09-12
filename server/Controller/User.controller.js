const UserModel = require("../Model/User.model");

const UpdateUser = async (req, res) => {
  const { name, age, gender, dob, mobile } = req.body;

  try {
    let data = {};
    if (name) {
      data.name = name;
    }
    if (age) {
      data.age = age;
    }
    if (gender) {
      data.gender = gender;
    }
    if (dob) {
      data.dob = dob;
    }
    if (mobile) {
      data.mobile = mobile;
    }

    const user = await UserModel.findByIdAndUpdate(req.userId, data);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res
      .status(200)
      .json({ message: "User information updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  UpdateUser,
  getUserDetails,
};
