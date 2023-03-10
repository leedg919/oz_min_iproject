import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../css/Intro.css";
import { ReactComponent as Img } from "../ozman01.svg";

import{doc,getDoc,setDoc} from "firebase/firestore"
import { db } from "../fbase";

const Intro = () => {


  const [total, setTotal] = useState(0);    
  const getData = async () => {     
    const docRef = doc(db, "mbti", "count");     
    const docSnap = await getDoc(docRef);     
    const count = docSnap.data().users
    setTotal(count);   
  };   
    useEffect(() => {
      getData();     
    },[]); 

    const user_count = () => {     
      setDoc(doc(db, "mbti", "count"), 
      {       users:  total+1,     });   
    }

  const navigate = useNavigate();
  function goTest(){
    user_count();
    navigate('/test')
  }

  return (
      <div className="introContainer">
        <div className="introTitle">π€ λλ<br></br>μ΄λ€ κ°λ°μκ°<br></br> λ  μμΈκ°?</div>
        <div className="introImgBox">
          <Img className="introImg"/>
        </div>

        <div className="introButtons">
          <button className="introButton" onClick={goTest} >μμνκΈ°</button>
          <div className="introCount">μ°Έμ¬μ μ : {total}</div>
        </div>
      </div>
  );
};

export default Intro;
