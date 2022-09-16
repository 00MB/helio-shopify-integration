const mongoose = require("mongoose");
const GlobalPackages = require('../global-package');
const adminSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password is required.'],
    },
    account_type: {
      type: String,
      default: 'admin'
    },
    token: {
      type: String,
      default: ''
    },
    otp: {
      type: String,
      default: ''
    },
  },
  {
    timestamps: true,
  }
);




adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log("modified password too");
    const salt = await GlobalPackages.bcrypt.genSalt(10);
    this.password = await GlobalPackages.bcrypt.hash(this.password, salt);
    // let oldPass = this.password
    // const verify = await bcrypt.compare(oldPass, this.password);
  }
  next()
})

const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;
