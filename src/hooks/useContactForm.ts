"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitContactForm } from "@/app/actions/contact";
import { type ContactFormValues, contactSchema } from "@/lib/schemas/contact";

export function useContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      collegeOrOrg: "",
      interest: "",
      helpTopics: [],
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setError(null);
      const result = await submitContactForm(data);

      if (result.success) {
        setSuccess(true);
        form.reset();
      } else {
        setError(result.error || "Something went wrong.");
      }
    } catch (_err) {
      setError("An unexpected error occurred.");
    }
  };

  return {
    form,
    onSubmit,
    isSubmitting: form.formState.isSubmitting,
    success,
    error,
  };
}
