import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import UpArrow from "../assets/right-arrow.inline.svg"
import gsap from "gsap"

// Create GSAP timeline
let tl = gsap.timeline()

const Header = () => {
  const [menuState, setMenuState] = useState(false)

  useEffect(() => {
    if (menuState === true) {
      // Open menu animation
      tl.to(".menu__container", { css: { display: "block" } })
        .from(".menu__container", {
          duration: 2,
          x: "100vw",
          ease: "Power3.easeOut"
        }, '-=1')
        .from(".nav-item", {
          stagger: 0.1,
          opacity: 0,
          y: 50,
          ease: "Power1.easeIn",
        }).to(".burger-menu span", {
          duration: .6,
          delay: -2,
          scaleX: 0,
          transformOrigin: "50% 0",
          ease: "expo.inOut"
        }).to("#Path_1", {
          duration: .4,
          delay: -.2,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5
          }
        }).to("#Path_2", {
          duration: .4,
          delay: -.2,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20
          }
        }).to("#Line_1", {
          duration: .4,
          delay: -.2,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18
          }
        }).to("#circle", {
          duration: .6,
          delay: -.8,
          css: {
            strokeDashoffset: 0
          }
        }).to(".close-menu__container", {
          duration: .6,
          delay: -.8,
          css: {
            display: "block"
          }
        })
    } else {
      // Close menu animation
      tl.to(".menu__container", { css: { display: "none" } })
        .from(".menu__container", {
          duration: 2,
          // x: "-100vw",
          ease: "Power3.easeOut"
        }, '-=1')
    }
  })

  return (
    <div className="header__container">
      <nav className="header">
        <div className="logo">
          <Link to="/">LENA TIUNOVA.</Link>
        </div>
        <div className="nav-toggle">
          <div
            onClick={() => {
              setMenuState(true)
            }}
            className="burger-menu"
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
          <div
            onClick={() => {
              setMenuState(false)
            }}
            className="burger-menu-close"
          >
            <UpArrow />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
