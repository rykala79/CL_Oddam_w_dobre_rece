import React from "react"
import aboutFoto from "../../assets/People.jpg"

export default function HomeAbout() {
    return (
        <section className="aboutUs" id="aboutUs">
            <div className="aboutUs">
                <h2 className="aboutUsTitle">O nas</h2>
                    
                </div>
                <div className="aboutUs_aboutImage" style={{backgroudImage:`url(${aboutFoto})`}} >

                </div>
        </section> 
    )
}
