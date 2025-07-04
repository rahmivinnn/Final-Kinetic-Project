"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-provider"
import { SocketProvider } from "@/lib/socket-provider"
import { PageTransition } from "@/components/page-transition"
import { CustomToastProvider } from "@/components/ui/custom-toast"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      <CustomToastProvider>
        <AuthProvider>
          <SocketProvider>
            <PageTransition>{children}</PageTransition>
          </SocketProvider>
        </AuthProvider>
      </CustomToastProvider>
    </ThemeProvider>
  )
}
