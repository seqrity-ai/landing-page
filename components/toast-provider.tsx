"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type Toast = {
  id: number;
  title?: string;
  description?: string;
};

type ToastContextValue = {
  showToast: (toast: Omit<Toast, "id">) => void;
};

const ToastContext = React.createContext<ToastContextValue | undefined>(
  undefined
);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const removeToast = React.useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = React.useCallback((toast: Omit<Toast, "id">) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { ...toast, id }]);

    // Auto-dismiss after 4 seconds
    window.setTimeout(() => {
      removeToast(id);
    }, 4000);
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center sm:justify-end px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 max-w-sm w-full sm:w-auto">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={cn(
                "glass-panel pointer-events-auto border border-emerald-400/40 bg-slate-950/95 px-4 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.95)]",
                "animate-in fade-in-0 slide-in-from-bottom-4"
              )}
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  {toast.title && (
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 mb-1">
                      {toast.title}
                    </div>
                  )}
                  {toast.description && (
                    <p className="text-xs sm:text-sm text-slate-200">
                      {toast.description}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  aria-label="Dismiss notification"
                  onClick={() => removeToast(toast.id)}
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-emerald-400/40 bg-slate-900/80 text-slate-100 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
}
