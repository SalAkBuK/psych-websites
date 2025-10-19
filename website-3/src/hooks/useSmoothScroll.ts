'use client'

import { useEffect, useState } from 'react'

interface UseSmoothScrollOptions {
  offset?: number
  duration?: number
}

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const { offset = 100, duration = 800 } = options

  const scrollToSection = (targetId: string) => {
    const target = document.querySelector(targetId)
    if (!target) return

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })

    // Focus management for accessibility
    setTimeout(() => {
      const focusableElement = target.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement
      
      if (focusableElement) {
        focusableElement.focus()
      } else {
        // Make the section focusable temporarily
        target.setAttribute('tabindex', '-1')
        ;(target as HTMLElement).focus()
        target.addEventListener(
          'blur',
          () => target.removeAttribute('tabindex'),
          { once: true }
        )
      }
    }, duration)
  }

  return { scrollToSection }
}
