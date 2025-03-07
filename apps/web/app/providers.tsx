import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@components/theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkProvider>{children}</ClerkProvider>
    </ThemeProvider>
  );
}
