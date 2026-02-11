"use client";

import { useState } from "react";
import { X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RegistrationClosedPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationClosedPopup({
  isOpen,
  onClose,
}: RegistrationClosedPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-8 text-center relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-white" />
                </button>

                <Calendar className="h-12 w-12 text-white mx-auto mb-3" />
                <h2 className="text-2xl font-bold text-white mb-2">
                  Registration Opening Soon
                </h2>
              </div>

              {/* Content */}
              <div className="px-6 py-8">
                <p className="text-foreground/70 text-center mb-6">
                  Registration for Olympus: The HR League opens on
                </p>

                <div className="bg-secondary/10 border-2 border-primary rounded-lg py-6 px-4 text-center mb-6">
                  <p className="text-sm font-medium text-foreground/60 mb-2">
                    Opens On
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    18 Feb 2026
                  </p>
                </div>

                <p className="text-foreground/60 text-center text-sm mb-6">
                  Come back on February 18th to secure your spot for this
                  flagship HR experience.
                </p>

                {/* Closing Button */}
                <button
                  onClick={onClose}
                  className="w-full bg-foreground/10 hover:bg-foreground/20 text-foreground font-semibold py-3 rounded-lg transition-colors"
                >
                  Got It, Thanks!
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
