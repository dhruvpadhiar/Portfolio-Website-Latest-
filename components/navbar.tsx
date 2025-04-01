"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavbarProps {
  items: {
    name: string
    ref: React.RefObject<HTMLDivElement>
  }[]
}

export default function Navbar({ items }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("Home")
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if we should show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setVisible(false) // Scrolling down & past threshold - hide navbar
      } else {
        setVisible(true) // Scrolling up - show navbar
      }

      // Set navbar background opacity based on scroll
      if (currentScrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section based on scroll position
      const sections = [...items].reverse()
      for (const item of sections) {
        const element = item.ref.current
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(item.name)
            break
          }
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items, lastScrollY])

  const handleNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const NavItems = () => (
    <>
      {items.map((item) => (
        <li key={item.name}>
          <button
            onClick={() => handleNavClick(item.ref)}
            className={cn(
              "px-4 py-2 rounded-full transition-all duration-300 font-roboto text-sm backdrop-blur-sm",
              activeSection === item.name
                ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/20 dark:shadow-teal-500/10"
                : "text-foreground/80 hover:text-foreground bg-background/10 hover:bg-background/20",
            )}
          >
            {item.name}
          </button>
        </li>
      ))}
    </>
  )

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMobile ? (
            <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
              <div className="text-foreground font-outfit font-bold">Dhruv Padhiar</div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-background/10 backdrop-blur-sm border-border/20 rounded-full"
                    >
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="bg-background/95 backdrop-blur-lg border-border/20">
                    <nav className="flex flex-col mt-10">
                      <ul className="flex flex-col space-y-4">
                        <NavItems />
                      </ul>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          ) : (
            <nav
              className={cn(
                "backdrop-blur-md rounded-full px-6 py-3 border border-border/20 transition-all duration-300 flex items-center",
                scrolled ? "bg-background/40" : "bg-background/20",
              )}
            >
              <ul className="flex space-x-3">
                <NavItems />
              </ul>
              <div className="h-6 mx-3 border-l border-border/30"></div>
              <ThemeToggle />
            </nav>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

