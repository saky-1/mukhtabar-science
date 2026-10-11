import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <h1 className="brand-title">مختبر</h1>
          <p className="brand-subtitle">اكتشف العلم بالتجربة</p>
        </div>
        <nav aria-label="التنقل الرئيسي" className="main-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}>
            الرئيسية
          </NavLink>
          <NavLink
            to="/experiments"
            className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
          >
            استكشاف التجارب
          </NavLink>
        </nav>
      </header>
      <main className="page-container">{children}</main>
    </div>
  )
}
