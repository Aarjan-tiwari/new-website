"use client"

import { useEffect, useState } from "react"

export default function ResponsiveViewport() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    typeof window !== 'undefined' && window.innerWidth < window.innerHeight ? 'portrait' : 'landscape'
  )

  useEffect(() => {
    // Function to update viewport and device detection
    const updateViewport = () => {
      // Set viewport height variable for mobile browsers
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      
      // Detect device type
      const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
      const tablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent.toLowerCase())
      
      setIsMobile(mobile)
      setIsTablet(tablet)
      
      // Update orientation
      setOrientation(window.innerWidth < window.innerHeight ? 'portrait' : 'landscape')
      
      // Add appropriate classes to document element
      document.documentElement.classList.toggle('is-mobile', mobile)
      document.documentElement.classList.toggle('is-tablet', tablet)
      document.documentElement.classList.toggle('is-desktop', !mobile && !tablet)
      document.documentElement.classList.toggle('is-portrait', orientation === 'portrait')
      document.documentElement.classList.toggle('is-landscape', orientation === 'landscape')
    }

    // Set initial values
    updateViewport()

    // Add event listeners
    const events = ['resize', 'orientationchange', 'load', 'fullscreenchange']
    events.forEach(event => window.addEventListener(event, updateViewport, { passive: true }))

    // Clean up
    return () => {
      events.forEach(event => window.removeEventListener(event, updateViewport))
    }
  }, [orientation])

  return null // This component doesn't render anything visible
}

