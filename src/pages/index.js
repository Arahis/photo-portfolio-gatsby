import React, { useEffect } from "react"
import { Link } from "gatsby"
import gsap from "gsap"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import SocialMedia from "../components/SocialMedia"
import "../styles/main.css"
import BgSlider from "../components/BgSlider"
import LinkToProject from "../components/LinkToProject"
import Header from "../components/header"

const IndexPage = () => {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(".bg", 1.6, {
      width: 0,
      ease: "power1.out",
    }).from('.slider__bg', 1.4, {
      width: 0,
      ease: "power1.out",
      stagger: 0.4
    }).from('.gatsby-image-wrapper img', 0.8, {
      width: 0,
      ease: "power1.out",
      stagger: 0.4
    })
  })

  return (
    <>
      <div className="bg"></div>
      <div className="container">
        <Header />
        <BgSlider />
        <SocialMedia />
        <LinkToProject />
        <Navbar />
      </div>
    </>
  )
}

export default IndexPage
