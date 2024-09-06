import { useState, useEffect } from "react";


export default function Layout({children}){
    const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const updateNavbarHeight = () =>{

      const navbar = document.querySelector('.navbar');
      if (navbar) {
      console.log(navbar.offsetHeight + 30)
        setNavbarHeight(navbar.offsetHeight + 30);
      }
    }

    window.onload = updateNavbarHeight
  }, []);

    return (
    <div className="container" style={{ paddingTop: `${navbarHeight}px` }}>
        {children}
    </div>
    )
}