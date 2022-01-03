import "./Animation.css";

//images
import Arrow from "../Images/Arrow.png";

const Animation = () => {
    return ( 
        <div className="Animation">
   
            <h4 class="Left-to-right">English Premier League <span> Soccer</span></h4>
             
             <div className="Arrow">
                <div className= "Arrow-up"></div>
                <div className= "Arrow-foot"></div>
                <div className= "Arrow-block"></div>
                <div className= "Arrow-block-1"></div>
            </div>

            <div class="icon">
                <div class="arrow"></div>
            </div>

            <div className="ScaleAnimation-Container">
                <h4 class="ScaleAnimation">Arsenal 
                <span className="ScaleAnimation-Span"> Holloway, London</span>
                </h4>
            </div>
               
        </div>
     );
}
 
export default Animation;