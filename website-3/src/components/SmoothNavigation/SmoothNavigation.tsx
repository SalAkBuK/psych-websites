'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { useActiveSection } from '@/hooks/useActiveSection'
import styles from './SmoothNavigation.module.css'

interface NavLink {
  label: string
  href: string
}

interface SmoothNavigationProps {
  links: NavLink[]
  className?: string
  activeClassName?: string
  offset?: number
  onNavigate?: () => void
}

export default function SmoothNavigation({
  links,
  className = '',
  activeClassName = '',
  offset = 100,
  onNavigate,
}: SmoothNavigationProps) {
  const { scrollToSection } = useSmoothScroll({ offset })
  const activeSection = useActiveSection({
    sectionIds: links.map((link) => link.href),
    offset,
  })

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)

    // Update URL without scrolling
    window.history.pushState(null, '', href)

    if (onNavigate) {
      onNavigate()
    }
  }

  return (
    <ul className={className}>
      {links.map((link) => {
        const isActive = activeSection === link.href
        
        return (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={isActive ? activeClassName : ''}
              aria-current={isActive ? 'page' : undefined}
            >
              {link.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
