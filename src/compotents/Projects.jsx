import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper,SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination} from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import projectData from './projectData';

function Projects() {

    SwiperCore.use([Navigation, Pagination]);

    let [project, setProject] = useState(projectData);
    return (
        <>
            <div className="secTitle s03">
                <p>Projects</p>
                <span className="moveBorder"></span>
            </div>
            <div className="listWrap projectPage hover">
                <div className="row">
                    <div className="projectList">
                        {
                            project.map((project, index) => {
                                return (
                                    <ProjectList projectData={project} key={index} />
                                )
                            })
                        }
                    </div>

                    <div className="mobilePList">
                        
                        <Swiper
                            direction='horizontal'
                            loop={true}
                            autoplay={false}
                            speed={500}
                            delay={1000}
                            slidesPerView={1}
                            navigation
                            pagination= {{
                                el: '.swiper-pagination',
                                type: 'fraction',
                            }}
                        >
                            {
                                project.map((project, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <MobileProjectList projectData={project} />
                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>
                    </div>
                </div>
            </div>
        
        </>
        
    )
}

function ProjectList(props) {
    let temp = '';
    if (props.projectData.title != null) {
        if (props.projectData.github != '' || props.projectData.velog != '') {
            temp = <div className="linkArea">
                <button type="button" className="btnGithub" onClick={() => window.open(props.projectData.link, '_blank')}>
                    <span class="hidden">깃허브로 이동</span>
                </button>
                <button type="button" className="btnVelog" onClick={() => window.open(props.projectData.link, '_blank')}>
                    <span class="hidden">벨로그로 이동</span>
                </button>
            </div>
        }

        return (
            <>
                <div className="project">
                    <div className="divNum">
                        <span>{props.projectData.id}</span>
                    </div>
                    <div className="preview"></div>
                    <div className="desc">
                        <span>{props.projectData.title}</span>
                        <div className="flex ac sb">
                            <div className="link">
                                <a href={props.projectData.link} target='_blank' title='바로가기'>바로가기</a>
                            </div>
                        </div>
                    </div>
                    <div className="shortArea">
                        <button type="button" className="btnShort" onClick={() => window.open(props.projectData.link, '_blank')}>
                            <span className="hidden">바로가기</span>
                        </button>
                    </div>

                    {temp}
                </div>
            </>

        )
    } else {
        return (
            <>
                <div className="project">
                    <div className="divNum">
                        <span>{props.projectData.id}</span>
                    </div>
                    <div className="preview"></div>
                    <div className="desc">
                        <span>준비중</span>
                    </div>
                </div>
            </>
        )
    }
}

function MobileProjectList(props){
    let temp02 = '';
    if (props.projectData.title != null) {
        if (props.projectData.github != '' || props.projectData.velog != '') {
            temp02 = <div className="linkArea">
                <button type="button" className="btnShort" onClick={() => window.open(props.projectData.link, '_blank')}>
                    <span class="hidden">바로가기</span>
                </button>
                <button type="button" className="btnGithub" onClick={() => window.open(props.projectData.link, '_blank')}>
                    <span className="hidden">깃허브로 이동</span>
                </button>
                <button type="button" className="btnVelog" onClick={() => window.open(props.projectData.link, '_blank')}>
                    <span className="hidden">벨로그로 이동</span>
                </button>
            </div>
        }

        return(
            <>
                <div className="project">
                    <div className="preview">
                        <div className="tit">
                            <a href={props.projectData.link} title={props.projectData.title}>{props.projectData.title}</a>
                        </div>
                        <div className="sub">
                            <p>{props.projectData.mobileDesc}</p>
                        </div>
                    </div>
                    {temp02}
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="project">
                    <div className="preview">
                        <div className="tit">
                            <a href="#">준비중</a>
                        </div>
                        <div className="sub">
                            <p>아직 준비중인 프로젝트이에요.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    
}

export default Projects;