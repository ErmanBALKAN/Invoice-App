import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ClosedSideBar = styled.header`
  max-width: 70px;
  width: 100%;
  height: 100%;
  border-right: 2px solid #eaebef;

  background: var(--second-background);

  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
      padding-top: 20px;
    }

    ul {
      margin-top: 20px;
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;

      a {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-top: 5px;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: background 0.3s;

        &.active {
          background: #f1ebff;
          
          svg {
            width: 30px;
            height: 30px;
            path {
              color: #803bfe;
            }
          }
        }

        &:hover {
          background: #e4d6ff;

          svg {
            path {
              color: #803bfe;
            }
          }
        }
        svg {
          width: 30px;
          height: 30px;
          path {
            color: #803bfe;
          }
        }
      }
    }
  }
`;

export const OpenSideBar = styled.header`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background: var(--shadow-black-color);


  display: flex;
  align-items: center;

  section {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    border-right: 2px solid #eaebef;

    max-width: 240px;
    height: 100%;

    background: var(--second-background);

    nav {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

      span {
        width: 100%;
        display: flex;
        align-items: flex-start;

        button {
          cursor: pointer;
          padding: 18px;
        }
      }

      ul {
        margin-top: 12px;
        width: 100%;
        text-align: left;
        display: flex;
        flex-direction: column;

        a {
          color: #803bfe;
          font-size: 1.1rem;
          padding: 2px 20px;
          border-radius: 8px 0 0 8px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background 0.3s;

          p {
            animation: ${appearFromRight} 0.4s;
          }

          svg {
            width: 30px;
            height: 30px;
            path {
              color: #803bfe;
            }
            &:hover {
              background: #f1ebff;

              svg {
                path {
                  color: #803bfe;
                }
              }
            }
          }

          &.active {
            background: #f1ebff;
            
            svg {
              path {
                color: #803bfe;
              }
            }
          }
        }
      }
    }
  }

  aside {
    width: 100%;
    height: 100%;
  }
`;

export const FooterDiv = styled.div`
  background-color: #E8E9ED;
  padding: 12px;
  text-align: center;
  margin-top: auto;
  border-radius: 50%;
  margin-bottom: 30px;
  
  span {
    color: #4E5056;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const FooterDivOpen = styled(FooterDiv)`
  margin-bottom: 30px;
  margin-left: 20px;
  padding: 15px 20px;
`;
