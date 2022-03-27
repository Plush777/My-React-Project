import { useState,useEffect } from 'react';

function StackList(){

    let [stackNameList, setStackNameList] = useState(['HTML5','SCSS','CSS3','JQUERY','GIT']);
    let [stackNameBottomList, setStackNameBottomList] = useState(['Adobe XD','Photoshop','Zeplin']);

    return(
        <>
            <div className="secTitle s02">
                <p>Stacks</p>
                <span className="moveBorder"></span>
            </div>
        
            <div className="listWrap stacksPage">
                <div className="row">
                    <div className="moveTxt">
                        <span>퍼블리싱 및 버전관리</span>
                    </div>
                    <div className="stackList">
                        {
                            stackNameList.map((stackName, index) => {
                                return (
                                    <div className="stack" key={index}>
                                        <div className="desc">
                                            <span>{stackName}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="listWrap stacksPage">
                <div className="row">
                    <div className="moveTxt">
                        <span>디자인</span>
                    </div>
                    <div className="stackList">
                        {
                            stackNameBottomList.map((stackName, index) => {
                                return (
                                    <div className="stack" key={index}>
                                        <div className="desc">
                                            <span>{stackName}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default StackList;