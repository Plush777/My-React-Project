import ReactFullpage from '@fullpage/react-fullpage';
import { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReadMe from './ReadMe';

const anchors = ['section1', 'section2','section3','section4'];
const Fullpage = () => {
    let [helpMsg, setHelpMsg] = useState(true);
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
                if(origin.index === 0){
                    const fpNav = document.getElementById('fp-nav');
                    fpNav.children[0].children[0].children[0].children[0].style.background = '#fff';
                    console.log(origin.index);
                } else if(origin.index === 1){
                    console.log(origin.index);
                } else if(origin.index === 2){
                    console.log(origin.index);
                }
            }}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <h1>
                            {
                                helpMsg === true ? (<Bubble/>) : null
                            }
                                <ReadMe>
                                    
                                </ReadMe>
                            </h1>
                        </div>
                        <div className="section">
                            <h1>Section 2</h1>
                        </div>
                        <div className="section">
                            <h1>Section 3</h1>
                        </div>
                        <div className="section">
                            <h1>Section 4</h1>
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

export default Fullpage;