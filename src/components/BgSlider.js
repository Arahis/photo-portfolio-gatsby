import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const BgSlider = () => {
  const data = useStaticQuery(graphql`
    {
      firstPhoto: file(relativePath: { eq: "photo1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      secondPhoto: file(relativePath: { eq: "photo2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className="slider__container">
      <div className="slider">
        <div className="first-slide slide">
          <div className="slider__bg small-img"></div>
          <Image fluid={data.firstPhoto.childImageSharp.fluid} />
        </div>
        <div className="second-slide slide">
          <div className="slider__bg large-img"></div>
          <Image fluid={data.secondPhoto.childImageSharp.fluid}/>
        </div>
      </div>
      <section className="next-slide__container">
        <div className="next-slide">
          <div className="arrows">
            <div className="arrow-up__container">
              <div className="arrow-up"></div>
            </div>
            <div className="arrow-down__container">
              <div className="arrow-down"></div>
            </div>
          </div>
          <div className="next-slide-image">
            <Image fluid={data.secondPhoto.childImageSharp.fluid} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default BgSlider
