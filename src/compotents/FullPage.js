import ReactFullpage from '@fullpage/react-fullpage';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReadMe from './ReadMe';
import Stack from './Stack';
import Projects from './Projects';
import Contact from './Contact';

const anchors = ['section1', 'section2', 'section3', 'section4'];
const Fullpage = () => {
    let [helpMsg, setHelpMsg] = useState(true);
    let [readMe, setReadMe] = useState(true);
    useEffect(() => {
        let helpMsg = setTimeout(() => {
            setHelpMsg(false);
        }, 3000);
        return () => {
            clearTimeout(helpMsg);
        }
    }, [helpMsg]);

    return (
        <ReactFullpage
            licenseKey='v2compatible-3F8D-B8B8-B8B8-B8B8'
            anchors={anchors}
            navigation
            navigationTooltips={[anchors]}
            scrollOverflow={true}
            sectionsColor={['#292a2d', '#ddd', '#292a2d', '#ddd']}
            scrollingSpeed={800}
            onLeave={(origin, index) => {
                if (origin.index === 1 && readMe === true) {
                    setReadMe(false);
                }
            }}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <h1>
                                {
                                    helpMsg === true ? (<Bubble />) : null
                                }
                                <ReadMe />
                                <Intro />
                            </h1>
                        </div>
                        <div className="section">
                            <h1>
                                <Stack />
                            </h1>
                        </div>
                        <div className="section">
                            <h1><Projects /></h1>
                        </div>
                        <div className="section">
                            <h1><Contact /></h1>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}

function Bubble() {
    return (
        <div className="help bubble">
            <div className="moveTxt">
                <span>readMe !</span>
            </div>
        </div>
    );
}

function Intro() {
    return (
        <>
            <div className="secTxt">
                <h1>
                    <strong className="boldType yellow">안</strong>녕하세요<br />
                    프론트엔드 개발자를 꿈꾸는<br />
                    <strong className="boldType sky name txtBgType white">Plush</strong>입니다!
                </h1>
            </div>
            <div className="scrollDown">
                <div id="mouseDown"></div>
                <div className="moveTxt">
                    <span>Scroll down</span>
                </div>
            </div>
        </>
    )
}
export default Fullpage;