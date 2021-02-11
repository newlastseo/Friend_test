import React from "react";
import img from "./scc_img01.png";

const Start = (props) => {

        return (
            <div className="container">
                <div className="outter">
                    <img className="scc_img" src={img}/>
                    <h1>
                        나는 <span>{props.name}</span>에대해 얼마나 알고 있을까?</h1>
                    <input className="text_box" type="text" placeholder="내이름"/>
                    <button className="button">시작하기</button>

                 </div>
            </div>

        );
   
}

export default Start;
