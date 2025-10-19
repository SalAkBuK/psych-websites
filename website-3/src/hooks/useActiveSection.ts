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

    const visibilityMap = new Map<string, number>()

    const updateActiveSection = () => {
      let bestMatch = ''
      let highestRatio = 0

      sectionIds.forEach((id) => {
        const ratio = visibilityMap.get(id) ?? 0

        if (ratio > highestRatio) {
          highestRatio = ratio
          bestMatch = id
        }
      })

      const nextActive = highestRatio > 0 ? bestMatch : ''

      setActiveSection((previous) =>
        previous === nextActive ? previous : nextActive,
      )
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const sectionId = `#${entry.target.id}`
        if (!sectionIds.includes(sectionId)) {
          return
        }

        visibilityMap.set(sectionId, entry.isIntersecting ? entry.intersectionRatio : 0)
      })

      updateActiveSection()
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.querySelector(id)
      if (element) observer.observe(element)
    })

    // Ensure an initial active section is set before any intersections
    updateActiveSection()

    return () => {
      sectionIds.forEach((id) => {
        const element = document.querySelector(id)
        if (element) observer.unobserve(element)
      })
    }
  }, [sectionIds, offset])

  return activeSection
}
