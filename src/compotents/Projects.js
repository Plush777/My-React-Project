import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';

function Projects(){
    return(
        <>
             <div className="secTitle s03">
                <p>Projects</p>
                <span className="moveBorder"></span>
            </div>
            <div className="listWrap projectPage hover">
                <div className="row">
                    <div className="projectList">
                        <div className="project indigoBg">
                            <div className="divNum">
                                <span>01</span>
                            </div>
                            <div className="preview ft"></div>
                            <div className="desc">
                                <span>NG TISSOT</span>
                                <div className="flex ac sb">
                                    <div className="link">
                                        <Link to="#" onClick={() => window.location='https://plush777.github.io/NGTISSOT/'} target='_blank' title='바로가기'>바로가기</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="shortArea">
                                <button type="button" className="btnShort" onClick={() => window.location='https://plush777.github.io/NGTISSOT/'}>
                                    <span className="hidden">바로가기</span>
                                </button>
                            </div>
                            <div className="linkArea">
                                <button type="button" className="btnGithub" onClick={()=>window.location='https://github.com/Plush777/2021NG_TISSOT'}>
                                    <span class="hidden">깃허브로 이동</span>
                                </button>
                                <button type="button" className="btnVelog" onClick={()=>window.location='https://velog.io/@sky/나만의-포트폴리오-페이지를-만들어-보았다'}>
                                    <span class="hidden">벨로그로 이동</span>
                                </button>
                            </div>
                        </div>
                        
                        <div className="project deepPurple">
                            <div className="divNum">
                                <span>02</span>
                            </div>
                            <div className="preview kasm"></div>
                            <div className="desc">
                                <span>한국공간정보산업협회</span>
                                <div className="flex ac sb">
                                    <div className="link">
                                        <Link to="/" onClick={() => window.location='https://www.kasm.or.kr/'} target='_blank' title='바로가기'>바로가기</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="shortArea">
                                <button type="button" className="btnShort" onClick={()=>window.location='https://www.kasm.or.kr/'}>
                                    <span className="hidden">바로가기</span>
                                </button>
                            </div>
                        </div>
                        
                        <div className="project grayScale">
                            <div className="divNum">
                                <span>03</span>
                            </div>
                            <div className="preview th"></div>
                            <div className="desc">
                                <span>준비중</span>
                            </div>
                        </div>
                        
                        <div className="project grayScale">
                            <div className="divNum">
                                <span>04</span>
                            </div>
                            <div className="preview fu"></div>
                            <div className="desc">
                                <span>준비중</span>
                            </div>
                            
                        </div>
                        
                        <div className="project grayScale">
                            <div className="divNum">
                                <span>05</span>
                            </div>
                            <div className="preview fh"></div>
                            <div className="desc">
                                <span>준비중</span>
                            </div>
                        </div>
                        
                        <div className="project grayScale">
                            <div className="divNum">
                                <span>06</span>
                            </div>
                            <div className="preview sx"></div>
                            <div className="desc">
                                <span>준비중</span>
                            </div>
                        </div>
                    </div>

                    {/* <div class="mobilePList">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide project">
                                    <div class="preview">
                                        <div class="tit">
                                            <a href="http://ngtissot.kr" title="NG TISSOT">NG TISSOT</a>
                                        </div>
                                        <div class="sub">
                                            <p>게임 클랜소개 사이트입니다.<br>
                                            반응형 및 다크모드 지원에 중점을 두었습니다.</p>
                                        </div>
                                    </div>
                                    
                                    <div class="linkArea">
                                        <button type="button" class="btnShort" onclick="window.open('http://ngtissot.kr','_blank');">
                                            <span class="hidden">바로가기</span>
                                        </button>
                                        <button type="button" class="btnGithub" onclick="window.open('https://github.com/Plush777/2021NG_TISSOT','_blank');">
                                            <span class="hidden">깃허브로 이동</span>
                                        </button>
                                        <button type="button" class="btnVelog" onclick="window.open('https://velog.io/@sky/나만의-포트폴리오-페이지를-만들어-보았다','_blank')";>
                                            <span class="hidden">벨로그로 이동</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="swiper-slide project">
                                    <div class="preview">
                                        <div class="tit">
                                            <a href="https://www.kasm.or.kr/">한국공간정보<br>산업협회</a>
                                        </div>
                                        <div class="sub">
                                            <p>공간정보산업협회 (KASM) 메인페이지 <br>유지보수 및 서브페이지 제작 담당을 한 프로젝트입니다.</p>
                                        </div>
                                    </div>

                                    <div class="linkArea">
                                        <button type="button" class="btnShort" onclick="window.open('https://www.kasm.or.kr/','_blank');">
                                            <span class="hidden">바로가기</span>
                                        </button>
                                        <button type="button" class="btnGithub" onclick="window.open('https://github.com/Plush777/2021NG_TISSOT','_blank');">
                                            <span class="hidden">깃허브로 이동</span>
                                        </button>
                                    </div>
                                </div>
                                
                                <div class="swiper-slide project">
                                    <div class="preview">
                                        <div class="tit">
                                            <a href="#">준비중</a>
                                        </div>
                                        <div class="sub">
                                            <p>아직 준비중인 프로젝트이에요.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slideMoveArea">
                                <button type="button" class="swiper-button-next"></button>
                                <button type="button" class="swiper-button-prev"></button>
                            </div>
                            <div class="swiper-pagination"></div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Projects;