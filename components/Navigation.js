import React from "react"
import Link from "next/link"
import styles from 'styles/Navigation.module.css'

export default function Navigation() {
  return (
    <nav id="nav" className="content">
        <div className="nav-links">
            <div className="nav-link">
              <Link href="/"><a>Úvod</a></Link>
            </div>
            <div className="nav-link">
              <Link href="#tvorba"><a>Tvorba</a></Link>
            </div>
            <div className="nav-link">
              <Link href="#clenove"><a>Členové</a></Link>
            </div>
            <div className="nav-link">
              <Link href="#foto"><a>Foto</a></Link>
            </div>
            <div className="nav-link">
              <Link href="#aktuality"><a>aktuality</a></Link>
            </div>
            <div className="nav-link">
              <Link href="#kontakt"><a>kontakt</a></Link>
            </div>
        </div>
    </nav>
  )
}