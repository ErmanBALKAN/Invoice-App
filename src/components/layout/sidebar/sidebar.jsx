import { useState } from "react";
import { ClosedSideBar, OpenSideBar, FooterDiv, FooterDivOpen } from "./sidebar.styles";
import { TbInvoice } from "react-icons/tb";

export function SideBar() {
  const [sideBar, setSideBar] = useState(false);
  const isHomePage = window.location.pathname === '/';

  function handleChangeSideBar() {
    setSideBar((prevState) => !prevState);
  }
  return (
    <>
        {!sideBar ? (
          <ClosedSideBar>
            <nav>
              <button onClick={handleChangeSideBar}>
                <img src="/assest/icons/logo/logo.png" alt="Logo" />
              </button>
              <ul>
                <a 
                  href="/" 
                  title="Invoice"
                  className={isHomePage ? 'active' : ''}
                >
                  <TbInvoice />
                </a>
              </ul>
            </nav>
            <FooterDiv>
              <span>AE</span>
            </FooterDiv>
          </ClosedSideBar>
        ) : (
          <OpenSideBar>
            <section>
              <nav>
                <span>
                  <button onClick={handleChangeSideBar}>
                    <img src="/assest/icons/logo/logo.png" alt="Logo" />
                  </button>
                </span>
                <ul>
                  <a 
                    href="/" 
                    title="Invoice"
                    className={isHomePage ? 'active' : ''}
                  >
                    <TbInvoice /> Invoice
                  </a>
                </ul>
              </nav>
            <FooterDivOpen>
              <span>Avery Ellis</span>
            </FooterDivOpen>
            </section>
            <aside onClick={handleChangeSideBar} />
          </OpenSideBar>
        )}
    </>
  );
}
