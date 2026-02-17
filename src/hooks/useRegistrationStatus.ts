import { useEffect, useState } from "react";

export function useRegistrationStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Registration opens on February 18, 2026
    const registrationOpenDate = new Date(2026, 1, 18);
    const now = new Date();

    setIsOpen(now >= registrationOpenDate);
    setLoading(false);
  }, []);

  return { isOpen, loading };
}
