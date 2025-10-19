'use client'

import { useCallback, useEffect, useId, useState } from 'react'
import SmoothNavigation from '@/components/SmoothNavigation/SmoothNavigation'
import styles from './HeroNavigationMenu.module.css'

interface NavLink {
  label: string
  href: string
}

interface HeroNavigationMenuProps {
  links: NavLink[]
  offset?: number
  ctaHref: string
  ctaLabel: string
}

export default function HeroNavigationMenu({
  links,
  offset = 100,
  ctaHref,
  ctaLabel,
}: HeroNavigationMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleMenu = () => {
    setIsOpen((previous) => !previous)
  }

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    const mediaQuery = window.matchMedia('(min-width: 901px)')

    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        closeMenu()
      }
    }

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleMediaChange)
    } else {
      mediaQuery.addListener(handleMediaChange)
    }

    document.addEventListener('keydown', handleKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)

      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', handleMediaChange)
      } else {
        mediaQuery.removeListener(handleMediaChange)
      }
    }
  }, [closeMenu, isOpen])

  const onNavigate = useCallback(() => {
    closeMenu()
  }, [closeMenu])

  return (
    <nav className={styles.heroNav} aria-label="Primary">
      <button
        type="button"
        className={styles.heroNavToggle}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={toggleMenu}
        data-open={isOpen}
      >
        <span className={styles.heroNavToggleIcon} aria-hidden="true">
          <span />
        </span>
        <span className={styles.heroNavToggleLabel}>Menu</span>
      </button>

      <div className={styles.heroNavInline}>
        <SmoothNavigation
          links={links}
          offset={offset}
          className={styles.heroNavList}
          activeClassName={styles.heroNavActiveLink}
        />
        <a className={styles.heroNavCta} href={ctaHref}>
          {ctaLabel}
        </a>
      </div>

      <button
        type="button"
        className={isOpen ? styles.heroNavBackdropVisible : styles.heroNavBackdrop}
        aria-hidden="true"
        tabIndex={-1}
        onClick={closeMenu}
      />

      <div
        id={menuId}
        className={`${styles.heroNavOverlay} ${isOpen ? styles.heroNavOverlayOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <SmoothNavigation
          links={links}
          offset={offset}
          className={styles.heroNavOverlayList}
          activeClassName={styles.heroNavOverlayActive}
          onNavigate={onNavigate}
        />
        <a className={styles.heroNavOverlayCta} href={ctaHref} onClick={onNavigate}>
          {ctaLabel}
        </a>
      </div>
    </nav>
  )
}

