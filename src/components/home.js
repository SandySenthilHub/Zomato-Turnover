import { useState } from "react";
import {  BsFillArrowRightSquareFill} from "react-icons/bs";


import CbeAll from "./Cities/Tamilnadu/Coimbatore/cbeAll";
import ChAll from "./Cities/Tamilnadu/Chennai/chAll";
import KanAll from "./Cities/Tamilnadu/Kancheepuram/kanAll";
import MadAll from "./Cities/Tamilnadu/Madurai/madAll";
import ThiAll from "./Cities/Tamilnadu/Thiruvallur/thiAll";

import ChanAll from "./Cities/Bengaluru/Chandapura/chanAll";
import ChikkAll from "./Cities/Bengaluru/Chikkabanavara/chikkAll";
import KoraAll from "./Cities/Bengaluru/Koramangala/koraAll";
import ThavaAll from "./Cities/Bengaluru/Thavarekere/thavaAll";
import WfAll from "./Cities/Bengaluru/Whitefield/wfAll";

import CdAll from "./Cities/Delhi/CD/cdAll";
import EdAll from "./Cities/Delhi/ED/edAll";
import NdAll from "./Cities/Delhi/ND/ndAll";
import NewAll from "./Cities/Delhi/New/newAll";
import ShaAll from "./Cities/Delhi/Shahdara/shaAll";

import BanAll from "./Cities/Hydrabad/Bandlaguda/banAll";
import GolAll from "./Cities/Hydrabad/Golconda/golAll";
import NamAll from "./Cities/Hydrabad/namoally/namoAll";
import SaidaAll from "./Cities/Hydrabad/Saidabad/saidaAll";
import ShaikAll from "./Cities/Hydrabad/Shaikpet/shaikAll";

import PalAll from "./Cities/Mumbai/Palghar/palAll";
import RaiAll from "./Cities/Mumbai/Raigad/raiAll";
import RatnaAll from "./Cities/Mumbai/Ratnagiri/ratnaAll";
import SindhuAll from "./Cities/Mumbai/Sindhudurg/sindhuAll";
import ThaneAll from "./Cities/Mumbai/Thane/thaneAll";




function Home() {

  const [show, setShow] = useState(1);

  const ShowTN = (index) => { setShow(index) }

  const [showSt , setShowSt] = useState(false);
  

  function showStates(){
    setShowSt(!showSt)
  }
  return (
    <div className="state">
      <div class="menu-bar">
        <ul>
          <li><button style={{ fontSize: "35px" , borderRadius:"30px" , width:"185px",marginLeft:"-60px"}} onClick={showStates}>  <div>STATE <BsFillArrowRightSquareFill style={{height:"20px", paddingBottom:"1px"}}/></div> </button>  
          {/* <div style={{width:"px"}}>STATE <BsFillArrowRightSquareFill /></div> */}
          {showSt &&     <div class="dropdown-menu">
              <ul>
                <li>
                  <button style={{ marginRight: "25px" }} >TamilNadu </button>
                  <div class="dropdown-menu-1">
                    <ul>
                      <li className={show === 1 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(1)} style={{ marginRight: "17px" }}>Coimbatore</button></li>
                      <li className={show === 2 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(2)} style={{ marginRight: "10px" }}>Chennai</button></li>
                      <li className={show === 3 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(3)} style={{ width: '180px',marginRight: "10px" }}>Kancheepuram</button></li>
                      <li className={show === 4 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(4)} style={{ marginRight: "10px" }}>Madurai</button></li>
                      <li className={show === 5 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(5)}>Thiruvallur</button></li>

                    </ul>
                  </div>
                </li>

                <li>
                  <button style={{ marginRight: "10px" }}>Bangalore </button>

                  <div class="dropdown-menu-2">
                    <ul>
                      <li className={show === 6 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(6)} style={{ marginRight: "10px" }}>Chandapura</button></li>
                      <li className={show === 7 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(7)}style={{ width: "170px",marginRight: "10px" }}>Chikkabanavara</button></li>
                      <li className={show === 8 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(8)}style={{ marginRight: "10px" }}>koramangala</button></li>
                      <li className={show === 9 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(9)} style={{ width: "170px", marginRight: "10px" }}>Thavarekere</button></li>
                      <li className={show === 10 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(10)}>Whitefield</button></li>

                    </ul>
                  </div>
                </li>

                <li>
                  <button style={{ marginRight: "10px" }} >Delhi</button>

                  <div class="dropdown-menu-3">
                    <ul style={{ marginLeft: "px" }}>
                      <li className={show === 11 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(11)} style={{ marginRight: "10px" }}>Daryaganj</button></li>
                      <li className={show === 12 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(12)} style={{ width: "170px" ,marginRight: "10px"}}>Gandhi Nagar</button></li>
                      <li className={show === 13 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(13)} style={{ width: "170px",marginRight: "10px" }}>Chanalayapuri</button></li>
                      <li className={show === 14 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(14)}style={{ marginRight: "10px" }}>Alipur</button></li>
                      <li className={show === 15 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(15)} style={{ width: "170px" }}>Nand Nagar</button></li>

                    </ul>
                  </div>
                </li>

                <li>
                  <button style={{ marginRight: "10px" }}>Hydrabad</button>

                  <div class="dropdown-menu-4">
                    <ul>
                      <li className={show === 16 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(16)} style={{ marginRight: "10px" }}>Bandlaguda</button></li>
                      <li className={show === 17 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(17)} style={{ marginRight: "10px" }}>Golconda</button></li>
                      <li className={show === 18 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(18)} style={{ marginRight: "10px" }}>Nampally</button></li>
                      <li className={show === 19 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(19)} style={{ marginRight: "10px" }}>Saidabad</button></li>
                      <li className={show === 20 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(20)}>Shaikpet</button></li>

                    </ul>
                  </div>
                </li>

                <li>
                  <button>Mumbai</button>

                  <div class="dropdown-menu-5">
                    <ul>
                      <li className={show === 21 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(21)} style={{ marginRight: "5px" }}>Palghar</button></li>
                      <li className={show === 22 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(22)} style={{ marginRight: "10px" }}>Raigad</button></li>
                      <li className={show === 23 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(23)} style={{ marginRight: "10px" }}>Ratnagiri</button></li>
                      <li className={show === 24 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(24)} style={{ marginRight: "10px" }}>Sindhudurg</button></li>
                      <li className={show === 25 ? "tabs active-tabs" : "tabs"}><button onClick={() => ShowTN(25)}>Thane</button></li>

                    </ul>
                  </div>
                </li>
              </ul>
            </div>}
        
          </li>

        </ul>
      </div>

      <div className="charts">
        <div className="tamilnadu">
          <div className={show === 1 ? "city active-city" : "city"}>
            <h1>Coimbatore</h1>
            <div className="charts-container">
              <CbeAll />
            </div>
          </div>
          <div className={show === 2 ? "city active-city" : "city"}>
            <h1>Chennai</h1>
            <div className="charts-container">
              <ChAll />
            </div>
          </div>
          <div className={show === 3 ? "city active-city" : "city"}>
            <h1>Kancheepuram</h1>
            <div className="charts-container">
              <KanAll />
            </div>
          </div>
          <div className={show === 4 ? "city active-city" : "city"}>
            <h1>Madurai</h1>
            <div className="charts-container">
              <MadAll />
            </div>
          </div>
          <div className={show === 5 ? "city active-city" : "city"}>
            <h1>Thiruvallur</h1>
            <div className="charts-container">
              <ThiAll />
            </div>
          </div>
        </div>

        <div className="bengaluru">
          <div className={show === 6 ? "city active-city" : "city"}>
            <h1>Chandapura</h1>
            <div className="charts-container">
              <ChanAll />
            </div>
          </div>
          <div className={show === 7 ? "city active-city" : "city"}>
            <h1>Chikkabanavara</h1>
            <div className="charts-container">
              <ChikkAll />
            </div>
          </div>
          <div className={show === 8 ? "city active-city" : "city"}>
            <h1>koramangala</h1>
            <div className="charts-container">
              <KoraAll />
            </div>
          </div>
          <div className={show === 9 ? "city active-city" : "city"}>
            <h1>Thavarekere</h1>
            <div className="charts-container">
              <ThavaAll />
            </div>
          </div>
          <div className={show === 10 ? "city active-city" : "city"}>
            <h1>Whitefield</h1>
            <div className="charts-container">
              <WfAll />
            </div>
          </div>
        </div>

        <div className="delhi">
          <div className={show === 11 ? "city active-city" : "city"}>
            <h1>Daryaganj</h1>
            <div className="charts-container">
              <CdAll />
            </div>
          </div>
          <div className={show === 12 ? "city active-city" : "city"}>
            <h1>Gandhi Nagar</h1>
            <div className="charts-container">
              <EdAll />
            </div>
          </div>
          <div className={show === 13 ? "city active-city" : "city"}>
            <h1>Chanalayapuri</h1>
            <div className="charts-container">
              <NdAll />
            </div>
          </div>
          <div className={show === 14 ? "city active-city" : "city"}>
            <h1>Alipur</h1>
            <div className="charts-container">
              <NewAll />
            </div>
          </div>
          <div className={show === 15 ? "city active-city" : "city"}>
            <h1>Nand Nagar</h1>
            <div className="charts-container">
              <ShaAll />
            </div>
          </div>
        </div>

        <div className="hydrabad">
          <div className={show === 16 ? "city active-city" : "city"}>
            <h1>Bandlaguda</h1>
            <div className="charts-container">
              <BanAll />

            </div>
          </div>
          <div className={show === 17 ? "city active-city" : "city"}>
            <h1>Golconda</h1>
            <div className="charts-container">
              <GolAll />
            </div>
          </div>
          <div className={show === 18 ? "city active-city" : "city"}>
            <h1>Nampally</h1>
            <div className="charts-container">
              <NamAll />
            </div>
          </div>
          <div className={show === 19 ? "city active-city" : "city"}>
            <h1>Saidabad</h1>
            <div className="charts-container">
              <SaidaAll />
            </div>
          </div>
          <div className={show === 20 ? "city active-city" : "city"}>
            <h1>Shaikpet</h1>
            <div className="charts-container">
              <ShaikAll />
            </div>
          </div>
        </div>

        <div className="mumbai">
          <div className={show === 21 ? "city active-city" : "city"}>
            <h1>Palghar</h1>
            <div className="charts-container">
              <PalAll />
            </div>
          </div>
          <div className={show === 22 ? "city active-city" : "city"}>
            <h1>Raigad</h1>
            <div className="charts-container">
              <RaiAll />
            </div>
          </div>
          <div className={show === 23 ? "city active-city" : "city"}>
            <h1>Ratnagiri</h1>
            <div className="charts-container">
              <RatnaAll />
            </div>
          </div>
          <div className={show === 24 ? "city active-city" : "city"}>
            <h1>Sindhudurg</h1>
            <div className="charts-container">
              <SindhuAll />
            </div>
          </div>
          <div className={show === 25 ? "city active-city" : "city"}>
            <h1>Thane</h1>
            <div className="charts-container">
              <ThaneAll />
            </div>
          </div>
        </div>


      </div>


    </div>

  );


}

export default Home;
