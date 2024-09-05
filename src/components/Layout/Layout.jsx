import { useState, useEffect } from "react";


export default function Layout({children}){
    const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight + 30);
    }
  }, []);

    return (
    <div className="container" style={{ paddingTop: navbarHeight }}>
        {children}
    </div>
    )
}