'use client'

import { useEffect, useState } from 'react'

interface UseActiveSection {
  sectionIds: string[]
  offset?: number
}

export function useActiveSection({ sectionIds, offset = 150 }: UseActiveSection) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: `-${offset}px 0px -50% 0px`,
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.querySelector(id)
      if (element) observer.observe(element)
    })

    return () => {
      sectionIds.forEach((id) => {
        const element = document.querySelector(id)
        if (element) observer.unobserve(element)
      })
    }
  }, [sectionIds, offset])

  return activeSection
}
