import { useState } from "react";
import { ClosedSideBar, OpenSideBar } from "./styles";
import { TbInvoice } from "react-icons/tb";

export function SideBar() {
  const [sideBar, setSideBar] = useState(false);

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
                <a href="/" title="Invoice">
                  <TbInvoice />
                </a>
              </ul>
            </nav>
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
                  <a href="/" title="Invoice">
                    <TbInvoice /> Invoice
                  </a>
                </ul>
              </nav>
            </section>
            <aside onClick={handleChangeSideBar} />
          </OpenSideBar>
        )}
    </>
  );
}
