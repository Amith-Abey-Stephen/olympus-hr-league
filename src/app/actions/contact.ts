"use server";

import { type ContactFormValues, contactSchema } from "@/lib/schemas/contact";

export async function submitContactForm(data: ContactFormValues) {
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: "Invalid form data" };
  }

  const scriptUrl = process.env.APP_SCRIPT_URL;

  if (!scriptUrl) {
    console.error("APP_SCRIPT_URL is not defined");
    return { success: false, error: "Server configuration error" };
  }

  // Map to Google Script expected keys
  const payload = {
    firstName: result.data.firstName,
    lastName: result.data.lastName,
    email: result.data.email,
    phone: result.data.phone,
    organization: result.data.collegeOrOrg,
    interest: result.data.interest,
    help: result.data.helpTopics,
  };

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `Submission failed: ${response.statusText}`,
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, error: "Failed to submit form" };
  }
}
