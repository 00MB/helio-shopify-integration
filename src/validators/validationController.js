const yup = require("yup");
// *************************************************************************

module.exports = {
  // admin login
  updatePassword: async (req, res, next) => {
    yup
      .object({
        body: yup.object().shape({
          email: yup.string().required("Email address id is  required."),
          password: yup
            .string()
            .required("password id  required.")
            .min(8, "password length is too short."),
          otp: yup
            .string()
            .required("opt code is  required")
            .min(8, "Otp letter validation failed.")
            .max(8, "Otp letter validation failed."),
        }),
        // params: yup.object({
        // }),
        // query: yup.object({
        // }),
      })
      .validate(
        {
          body: req.body,
          query: req.query,
          params: req.params,
        },
        { abortEarly: false }
      )
      .then((data) => {
        return next();
      })
      .catch((error) => {
        return res
          .status(403)
          .json({ type: error.name, message: error.errors });
      });
  },

  resetPassword: async (req, res, next) => {
    yup
      .object({
        body: yup.object().shape({
          email: yup.string().required("Email address id is  required"),
        }),
        // params: yup.object({
        // }),
        // query: yup.object({
        // }),
      })
      .validate(
        {
          body: req.body,
          query: req.query,
          params: req.params,
        },
        { abortEarly: false }
      )
      .then((data) => {
        return next();
      })
      .catch((error) => {
        return res
          .status(403)
          .json({ type: error.name, message: error.errors });
      });
  },
  adminLogin: async (req, res, next) => {
    yup
      .object({
        body: yup.object().shape({
          email: yup.string().required("Email address id is  required"),
          password: yup.string().required("password id is  required"),
        }),
        // params: yup.object({
        // }),
        // query: yup.object({
        // }),
      })
      .validate(
        {
          body: req.body,
          query: req.query,
          params: req.params,
        },
        { abortEarly: false }
      )
      .then((data) => {
        return next();
      })
      .catch((error) => {
        return res
          .status(403)
          .json({ type: error.name, message: error.errors });
      });
  },
};
