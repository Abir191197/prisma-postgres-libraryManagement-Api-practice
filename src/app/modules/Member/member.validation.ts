import { z } from "zod";

// Define Zod schema for Member
export const MemberSchemaValidator = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .max(255, { message: "Name must be 255 characters or fewer" }),

    email: z.string().email({ message: "Invalid email format" }),

    phone: z
      .string()
      .min(10, { message: "Phone number should be at least 10 digits" })
      .max(15, { message: "Phone number should not exceed 15 digits" }),


  }),
});

export type Member = z.infer<typeof MemberSchemaValidator>; // Export type for use in TypeScript
