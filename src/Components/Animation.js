import "./Animation.css";

//images
import Arrow from "../Images/Arrow.png";

const Animation = () => {
  return (
    <div className="Animation">
      <h4 class="Left-to-right">
        English Premier League <span> Soccer</span>
      </h4>

      {/* <div className="Arrow">
        <div className="Arrow-up"></div>
        <div className="Arrow-foot"></div>
        <div className="Arrow-block"></div>
        <div className="Arrow-block-1"></div>
      </div> */}

      <div class="icon">
        <svg
        
          xmlns="http://www.w3.org/2000/svg"
          width="56.001"
          height="79"
          viewBox="0 0 56.001 79"
        >
          <g
          className="pfeil-innen"
            id="Vereinigungsmenge_1"
            data-name="Vereinigungsmenge 1"
            transform="translate(-8916.999 3339.999)"
            fill="none"
          >
            <path d="M8935-3261v-39h-18l28-40,28,40h-18v39Z" stroke="none" />
            <path
            className="pfeil"
              d="M 8952.0009765625 -3263.999267578125 L 8952.0009765625 -3303.00048828125 L 8967.23828125 -3303.00048828125 L 8945 -3334.76806640625 L 8922.7607421875 -3303.00048828125 L 8937.9990234375 -3303.00048828125 L 8937.9990234375 -3263.999267578125 L 8952.0009765625 -3263.999267578125 M 8955.0009765625 -3260.999267578125 L 8934.9990234375 -3260.999267578125 L 8934.9990234375 -3300.00048828125 L 8916.9990234375 -3300.00048828125 L 8945 -3339.999267578125 L 8973 -3300.00048828125 L 8955.0009765625 -3300.00048828125 L 8955.0009765625 -3260.999267578125 Z"
              stroke="none"
              fill="blue"
            />
          </g>
        </svg>

    

      </div>

      <div className="ScaleAnimation-Container">
        <h4 class="ScaleAnimation">
          Arsenal
          <span className="ScaleAnimation-Span"> Holloway, London</span>
        </h4>
      </div>
    </div>
  );
};

export default Animation;