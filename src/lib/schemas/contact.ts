import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  collegeOrOrg: z.string().min(2, "College/Organization is required"),
  interest: z
    .string()
    .min(10, "Please tell us more about your interest (at least 10 chars)"),
  helpTopics: z.array(z.string()).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
