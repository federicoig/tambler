import React from "react"

export function PostContent({ content }){
    const { img, footertext, maintext, link} = content
    return(
        <React.Fragment>
            {img.src === "" ? 
                <p className="main-text">{maintext}<br /><a href={link}>{link}</a></p> 
                :
                <div>
                    <p className="main-text">{maintext}<br /><a href={link}>{link}</a></p>
                    <div className="wrapper">
                        <img className="content-image" alt={img.alt} src={img.src}></img>
                    </div>
                    <p className="footer-text">{footertext}</p>        
                </div>
            }
        </React.Fragment>
    )
}