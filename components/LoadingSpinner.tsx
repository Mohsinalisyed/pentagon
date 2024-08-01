import React from "react";

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center max-w-48 w-48">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-coreColor" />
  </div>
);
