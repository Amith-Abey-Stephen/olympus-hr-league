"use client";

import { useState } from "react";
import { useRegistrationStatus } from "@/hooks/useRegistrationStatus";
import { RegistrationClosedPopup } from "./RegistrationClosedPopup";
import { siteConfig } from "@/config/site";

interface RegisterButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function RegisterButton({
  children,
  className,
}: RegisterButtonProps) {
  const { isOpen: isRegistrationOpen } = useRegistrationStatus();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isRegistrationOpen) {
      e.preventDefault();
      e.stopPropagation();
      setShowPopup(true);
    }
  };

  return (
    <>
      <a
        href={isRegistrationOpen ? siteConfig.links.registration : "#"}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
        style={{ cursor: "pointer" }}
      >
        {children}
      </a>
      <RegistrationClosedPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>
  );
}
