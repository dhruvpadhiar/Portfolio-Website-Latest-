"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 2 // Cover the whole page
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient blobs
    const blobs = []

    // Create different blob shapes
    for (let i = 0; i < 6; i++) {
      const radius = Math.random() * 300 + 200
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: radius,
        originalRadius: radius,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        phase: Math.random() * Math.PI * 2,
        phaseIncrement: 0.002 + Math.random() * 0.002,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set colors based on theme
      const isDark = theme === "dark"
      const colors = isDark
        ? [
            { r: 0, g: 128, b: 128, a: 0.15 }, // teal
            { r: 0, g: 180, b: 180, a: 0.1 }, // light teal
            { r: 0, g: 100, b: 150, a: 0.12 }, // blue-teal
          ]
        : [
            { r: 100, g: 200, b: 200, a: 0.1 }, // light teal
            { r: 100, g: 180, b: 220, a: 0.08 }, // light blue
            { r: 120, g: 220, b: 210, a: 0.07 }, // turquoise
          ]

      // Draw and update blobs
      blobs.forEach((blob, index) => {
        // Update blob radius with sine wave for pulsing effect
        blob.phase += blob.phaseIncrement
        blob.radius = blob.originalRadius + Math.sin(blob.phase) * 20

        // Draw blob with gradient
        const color = colors[index % colors.length]
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius)

        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 1.5})`)
        gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`)
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        blob.x += blob.vx
        blob.y += blob.vy

        // Bounce off edges with some padding
        const padding = blob.radius * 0.5
        if (blob.x < -padding) blob.x = canvas.width + padding
        if (blob.x > canvas.width + padding) blob.x = -padding
        if (blob.y < -padding) blob.y = canvas.height + padding
        if (blob.y > canvas.height + padding) blob.y = -padding
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70 dark:opacity-50"
      aria-hidden="true"
    />
  )
}

