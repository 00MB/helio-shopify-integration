const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    account_name: {
      type: String,
      default: 'UnName',
    },
    metaMask_address: {
      type: String,
      required: [true, 'metaMask is required.'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required.'], 
    },
    account_type: {
      type: String,
      default: 'meta-mask'
    },
    account_balance: {
      type: Number,
      default: 0
    },
    token: {
      type: String,
      default: 0
    },
  },
  {
    timestamps: true,
  }
);




// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     // let oldPass = this.password
//     // const varify = await bcrypt.compare(oldPass, this.password);
//   }
//   next()
// })

const User = mongoose.model('metaMask', userSchema);

module.exports = User;
