"use client"

import { useEffect, useRef } from "react"

export default function BackgroundShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 3 // Make canvas taller to cover the whole page
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient shapes
    const shapes = []
    const gradientColors = [
      { start: "rgba(0, 128, 128, 0.4)", end: "rgba(0, 180, 180, 0.1)" }, // teal
      { start: "rgba(0, 100, 128, 0.3)", end: "rgba(0, 150, 180, 0.1)" }, // blue-teal
      { start: "rgba(0, 80, 100, 0.3)", end: "rgba(0, 120, 140, 0.1)" }, // dark teal
      { start: "rgba(0, 60, 80, 0.3)", end: "rgba(0, 100, 120, 0.1)" }, // deep teal
      { start: "rgba(0, 200, 200, 0.2)", end: "rgba(0, 255, 255, 0.05)" }, // bright teal
    ]

    // Create different gradient shapes
    for (let i = 0; i < 8; i++) {
      const width = Math.random() * 600 + 400
      const height = Math.random() * 600 + 400
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: width,
        height: height,
        gradient: gradientColors[Math.floor(Math.random() * gradientColors.length)],
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.001,
        type: Math.floor(Math.random() * 3), // 0: circle, 1: rounded rect, 2: blob
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, "rgba(0, 80, 80, 1)") // teal
      bgGradient.addColorStop(0.5, "rgba(0, 40, 60, 1)") // dark teal
      bgGradient.addColorStop(1, "rgba(0, 0, 0, 1)") // black
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update gradient shapes
      shapes.forEach((shape) => {
        ctx.save()
        ctx.translate(shape.x + shape.width / 2, shape.y + shape.height / 2)
        ctx.rotate(shape.rotation)

        // Create gradient
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.width / 2)
        gradient.addColorStop(0, shape.gradient.start)
        gradient.addColorStop(1, shape.gradient.end)
        ctx.fillStyle = gradient

        // Draw shape based on type
        if (shape.type === 0) {
          // Circle
          ctx.beginPath()
          ctx.arc(0, 0, shape.width / 2, 0, Math.PI * 2)
          ctx.fill()
        } else if (shape.type === 1) {
          // Rounded rectangle
          const radius = 50
          ctx.beginPath()
          ctx.moveTo(-shape.width / 2 + radius, -shape.height / 2)
          ctx.lineTo(shape.width / 2 - radius, -shape.height / 2)
          ctx.arcTo(shape.width / 2, -shape.height / 2, shape.width / 2, -shape.height / 2 + radius, radius)
          ctx.lineTo(shape.width / 2, shape.height / 2 - radius)
          ctx.arcTo(shape.width / 2, shape.height / 2, shape.width / 2 - radius, shape.height / 2, radius)
          ctx.lineTo(-shape.width / 2 + radius, shape.height / 2)
          ctx.arcTo(-shape.width / 2, shape.height / 2, -shape.width / 2, shape.height / 2 - radius, radius)
          ctx.lineTo(-shape.width / 2, -shape.height / 2 + radius)
          ctx.arcTo(-shape.width / 2, -shape.height / 2, -shape.width / 2 + radius, -shape.height / 2, radius)
          ctx.closePath()
          ctx.fill()
        } else {
          // Blob (irregular shape)
          ctx.beginPath()
          const points = 8
          const angleStep = (Math.PI * 2) / points
          const radiusVariance = 0.3

          for (let i = 0; i < points; i++) {
            const angle = i * angleStep
            const radiusOffset = 1 - Math.random() * radiusVariance
            const x = Math.cos(angle) * (shape.width / 2) * radiusOffset
            const y = Math.sin(angle) * (shape.height / 2) * radiusOffset

            if (i === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          }

          ctx.closePath()
          ctx.fill()
        }

        ctx.restore()

        // Update position
        shape.x += shape.vx
        shape.y += shape.vy
        shape.rotation += shape.rotationSpeed

        // Bounce off edges with some padding
        if (shape.x < -shape.width) shape.x = canvas.width
        if (shape.x > canvas.width) shape.x = -shape.width
        if (shape.y < -shape.height) shape.y = canvas.height
        if (shape.y > canvas.height) shape.y = -shape.height
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: "linear-gradient(to bottom right, #005050, #002838, #000000)" }}
    />
  )
}

