const yup = require("yup");
// *************************************************************************

module.exports = {
  getMetaAccount: async (req, res, next) => {
    yup
      .object({
        body: yup.object().shape({
          metaMask_address: yup
            .string()
            .required("MataMask address id is  required"),
          utc_time: yup.string().required("Time is required id is  required"),
          email: yup
            .string()
            .required("Email address is  required")
            .email("Email address is not valid."),
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
  otpVerification: async (req, res, next) => {
    yup
      .object({
        body: yup.object().shape({
          email: yup.string().required("Email address id is  required"),
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
  stripeMintByAdmin: async (req, res, next) => {
    yup
      .object({
        body: yup.object().shape({
          payment_id: yup.string().required("Payment id is required"),
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
  createNft: async (req, res, next) => {
    yup
      .object({
        body: yup.object().shape({
          nftes_file: yup.object().required("Nft File is  required"),
          nft_type: yup.string().required("Nft type is  required"),
          nft_name: yup.string().required("Nft name is  required"),
          collection_type: yup
            .string()
            .required("Collection type is  required"),
          royalties: yup
            .number()
            .typeError("You must specify a number")
            .required("Royalties is  required"),
          copy_count: yup
            .number()
            .typeError("You must specify a number")
            .required("Copy count number is  required"),
          price: yup
            .number()
            .typeError("You must specify a number")
            .required("Price is  required"),
          description: yup.string().required("Description is  required"),
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
          .json({ error: true, type: error.name, message: error.errors });
      });
  },
  categoryValidator: async (req, res, next) => {
    yup
      .object({
        body: yup.object().shape({
          category_name: yup.string().required("Category is required"),
          count: yup.number().required("Count is required"),
          matic_price: yup.number().required("Matic price is required"),
          euro_price: yup.number().required("Euro price is required"),
        }),
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
