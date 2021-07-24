import React from "react"
import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="content">
        <div className="nav-links">
            <div className="nav-li">
              <Link href="/"><a>Úvod</a></Link>
            </div>
            <div className="nav-li">
              <Link href="#tvorba"><a>Tvorba</a></Link>
            </div>
            <div className="nav-li">
              <Link href="#clenove"><a>Členové</a></Link>
            </div>
            <div className="nav-li">
              <Link href="#foto"><a>Foto</a></Link>
            </div>
            <div className="nav-li">
              <Link href="#aktuality"><a>aktuality</a></Link>
            </div>
            <div className="nav-li">
              <Link href="#kontakt"><a>kontakt</a></Link>
            </div>
        </div>
    </nav>
  )
}