//CSS-Styling
import "./Animation.css";

//settings and other stuff
import React from 'react';

class Animation extends React.Component {

    state = {
      opacity: '0'
    }

  

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 0) {
          this.setState({ opacity: "1" })
        } else {
          this.setState({ opacity: "0" })
        }
      }
    }
  }


  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      });
  }


  render() { 
    return (
      <div class="icon icon-sticky" style={{ opacity: `${this.state.opacity}`}}>
        <svg 
            onClick={this.scrollToTop}
            className="pfeil"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 72 102"
            width="72"
            height="102"
        >
            <defs>
              <clipPath id="clip-path">
                <polygon
                  points="47.5 59 47.5 102 24.5 102 24.5 59 0 59 36 0 72 59 47.5 59"
                />
              </clipPath>
            </defs>
            <g>
              <rect
              className="pfeil-innen"
                y="102"
                width="72"
                height="102"
                fill="#E83539"
                clipPath="url(#clip-path)"
              />
            </g>
            <path
              className="cls-3"
              d="M36,7.68,64.87,55H43.5V98h-15V55H7.13L36,7.68M36,0,0,59H24.5v43h23V59H72L36,0Z"
              fill="#E83539"
            />
          </svg>
      </div>
    );
  }

}

export default Animation;