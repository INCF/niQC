import { css } from '@emotion/core';
import theme from '../../config/theme';

const headroom = css`
  .headroom-wrapper {
    position: fixed;
    width: 100%;
    z-index: 2000;
    top: 0;
  }
  .headroom {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 1rem 1.5rem;
    background: none;
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.white.base};
      }
    }
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--scrolled {
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
    transition: ${theme.transitions.headroom.transition};

    @media only screen and (max-width : 640px) {
      nav {
        display: none !important;
      }
    }
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  }
`;

export default headroom;
