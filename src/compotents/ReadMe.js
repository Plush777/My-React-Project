import { useState,useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import InfoData from './info';

function ReadMe(){

    let [readMe, setReadMe] = useState(true);
    let [age, setAge] = useState('');
    let [email, setEmail] = useState('sky11916@naver.com');
    let [instagramId, setInstagramId] = useState('@tjrbdud_02');
    let [mbtiInfo, setMbtiInfo] = useState('INFP');
    let [info, setInfo] = useState(InfoData);
    // console.log(info);

    const posRight = () => {
        let btnReadMe = document.getElementsByClassName('readMe');
        let readMeIcon = document.getElementsByClassName('readMeIcon');
        if(readMe === true){
            readMeIcon[0].style.transform = 'rotate(-180deg)';
            btnReadMe[0].style.right = '0';
        }else if(readMe === false){
            readMeIcon[0].style.transform = 'rotate(0deg)';
            btnReadMe[0].style.right = '-400px';
        }
        setReadMe(!readMe);
        console.log(readMe);
    }

    useEffect(() => {
        let today = new Date();
        let birthDate = new Date('2002,11,19');
        let myAge = today.getFullYear() - birthDate.getFullYear()+1;
        setAge('나이 : ' + myAge);
    }, []);

    return(
        <>
            <div className="readMe">
                <button type="button" className="btnReadMeToggle" onClick={posRight}>
                    <svg className='readMeIcon' width="16" height="16" viewBox="0 0 16 16">
                        <g id="다각형_2" data-name="다각형 2" transform="translate(0 16) rotate(-90)">
                            <path d="M 15.19098472595215 15.5 L 0.8090149760246277 15.5 L 8 1.118029952049255 L 15.19098472595215 15.5 Z" stroke="none"/>
                            <path d="M 8 2.236069679260254 L 1.618035316467285 15 L 14.38196468353271 15 L 8 2.236069679260254 M 8 0 L 16 16 L 0 16 L 8 0 Z" stroke="none" fill="#000"/>
                        </g>
                    </svg>
                </button>
                <div className="head">
                    <div className="inner">
                        <strong>Introduce</strong>
                    </div>
                </div>
                <div className="cont">
                    <div className="inner">
                        <div className="row">
                            <div id="profile"></div>
                            <div className="infoArea">
                                <p>닉네임 : <span className="txtColorType sky">Plush</span></p>
                                <p>{age}</p>
                                <p>
                                    <Link to='/' onClick={() => window.location='mailto:sky11916@naver.com'}>이메일 : {email}</Link>
                                </p>
                                <p>
                                    <Link to='/' onClick={() => window.location='https://www.instagram.com/tjrbdud_02/'}>인스타 : {instagramId}</Link>
                                </p>
                                <p>MBTI : {mbtiInfo}</p>
                            </div>
                        </div>
                        {
                            info.map((info, index) => {
                                return(
                                    <>
                                        <RowInfo rowInfoData={info} key={index}></RowInfo>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="mobileReadMe">
                <button type="button" className="btnMobileReadMe"></button>
                <div className="head">
                    <div className="inner">
                        <strong>Introduce</strong>
                    </div>
                </div>
                <div className="cont">
                    <div className="inner">
                        <div className="row">
                            <div id="profile"></div>
                            <div className="infoArea">
                                <p>닉네임 : <span className="txtColorType sky">Plush</span></p>
                                <p className="myAge"></p>
                                <p>
                                    <a href="mailto:sky11916@naver.com" className="myEmail"></a>
                                </p>
                                <p>취미 : 음악 듣기 / 게임</p>
                                <p>MBTI : INFP</p>
                            </div>
                        </div>
                        <div className="row colType">
                            <div className="infoTitle">
                                <strong>회사정보</strong>
                            </div>
                            <div className="infoArea">
                                <p className="bullet"><a href="http://ifcommunity.co.kr/" target="_blank">이프커뮤니티</a>(2020.11.02 ~ )</p>
                                <p className="bullet">주요 업무 : 웹 퍼블리싱 (HTML/SCSS/JQUERY)</p>
                                <p className="bullet">현재 산업기능요원으로 복무 중 </p>
                            </div>
                        </div>
                        <div className="row colType">
                            <div className="infoTitle">
                                <strong>자격증</strong>
                            </div>
                            <div className="infoArea">
                                <p className="bullet"><a href="https://namu.wiki/w/%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EB%8A%A5%EC%82%AC" target="_blank">정보처리기능사</a>(2021.05.07)</p>
                                <p className="bullet"><a href="https://namu.wiki/w/%EC%9B%B9%EB%94%94%EC%9E%90%EC%9D%B8%EA%B8%B0%EB%8A%A5%EC%82%AC" target="_blank">웹디자인기능사</a>(2021.09.17)</p>
                            </div>
                        </div>
                        <div className="row colType">
                            <div className="infoTitle">
                                <strong>하고싶은 말</strong>
                            </div>
                            <div className="infoArea">
                                <p>최신 문법에 관심이 많고, 자바스크립트에 대해 많은 고민 중인
                                1년차 초보 퍼블리셔입니다. 아직은 부족하더라도 지켜봐주세요!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function RowInfo(props){
    return(
        <div className="row colType">
            <div className="infoTitle">
                <strong>{props.rowInfoData.title}</strong>
            </div>
            <div className="infoArea">
                <p className='bullet'>{props.rowInfoData.text}</p>
                <p className='bullet'>{props.rowInfoData.text02}</p>
                <p>{props.rowInfoData.desc}</p>
            </div>
        </div>
    )
}

export default ReadMe;