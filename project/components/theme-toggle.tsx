"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // コンポーネントがマウントされた後にのみレンダリングするため
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={`w-9 h-9 rounded-full ${className}`}>
        <span className="sr-only">テーマを切り替える</span>
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all text-gray-400" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`w-9 h-9 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 ${className}`}
    >
      <span className="sr-only">テーマを切り替える</span>
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 text-yellow-500" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-purple-300" />
    </Button>
  )
}
