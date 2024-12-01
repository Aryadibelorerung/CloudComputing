const { z } = require('zod');

const loginValidate = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),

  password: z
    .string()
    .min(1, { message: "Password is required" }),
});

module.exports = loginValidate;