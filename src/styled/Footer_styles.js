import styled from "styled-components";

export const FooterTag = styled.footer`
  background: var(--color);
  padding: 1rem 0;
  text-align: center;
  margin-top: 3rem;
  
  .socials {
    display: flex;
    justify-content: center;
    gap: .2rem;
  }
  .socials a {
    background: var(--color);
    color: black;
    padding: 0.5rem;
    border-radius: 0.7rem;
    display: flex;
    border: 1px solid transparent;
    transition: all 500ms ease;
  }
  .socials a:hover {
    background: transparent;
    border-color: var(--color-bg);
  }
  .copyright {
    margin-bottom: 1rem;
    color: black;
  }
`;