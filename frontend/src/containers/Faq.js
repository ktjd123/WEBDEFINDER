import React from 'react'

import 'css/Faq.css';

export default class Faq extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
            show7: false,
            show8: false,
            showText: 'Show All'
        }

        this.showaw = this.showaw.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow(){
        if(this.state.showText === 'Show All'){
            this.setState({
                show1: true,
                show2: true,
                show3: true,
                show4: true,
                show5: true,
                show6: true,
                show7: true,
                show8: true,
                showText: 'Hide All'
            })
        }else{
            this.setState({
                show1: false,
                show2: false,
                show3: false,
                show4: false,
                show5: false,
                show6: false,
                show7: false,
                show8: false,
                showText: 'Show All'
            })
        }
    }

    showaw(num) {
        let nextState = {};
        let value = undefined;
        switch (num) {
            case 1:
                value = !this.state.show1
                break;
            case 2:
                value = !this.state.show2
                break;
            case 3:
                value = !this.state.show3
                break;
            case 4:
                value = !this.state.show4
                break;
            case 5:
                value = !this.state.show5
                break;
            case 6:
                value = !this.state.show6
                break;
            case 7:
                value = !this.state.show7
                break;
            case 8:
                value = !this.state.show8
                break;
            default:
                break;
        }
        nextState['show' + num] = value

        this.setState(nextState);
    }

    render() {
        return (
            <div className='wrapper faq'>
                <h1>FAQ</h1>
                <h6 className='show' onClick={this.toggleShow}>{this.state.showText}</h6>


                <div className='faqContainer'>
                <h6 className='intro'>Introduce</h6>
                <span className='divider' />
                    <div className='faqItem' onClick={() => this.showaw(1)}>
                        <div className='qs'>
                            Q. 웹 디파인더란?
                        </div>
                    </div>
                    <div className={`aw ${this.state.show1}`}>
                        A. Web Define + Web Designer Finder를 합친 말입니다.
                    </div>
                    <div className='faqItem' onClick={() => this.showaw(2)}><div className='qs'>
                        Q. 웹 디파인더 기대효과?</div>
                    </div>
                    <div className={`aw ${this.state.show2}`}>
                        A. 개발자와 웹 디자이너간의 상호작용으로 개발자는 인력을 구하고 웹 디자이너는 취업의 기회를 가질 수 있게 되는 효과를 기대합니다.
                    </div>

                    <h6 className='intro'>Sites</h6>
                    <span className='divider' />

                    <div className='faqItem' onClick={() => this.showaw(3)}><div className='qs'>
                        Q. JOBS 페이지란?</div>
                    </div>
                    <div className={`aw ${this.state.show3}`}>
                        A. Web designer들과 개발자들이 자유롭게 구인/구직정보를 올리는 페이지입니다.
                    </div>
                    <div className='faqItem' onClick={() => this.showaw(4)}><div className='qs'>
                        Q. WORKS 페이지란?</div>
                    </div>
                    <div className={`aw ${this.state.show4}`}>
                        A. Web designer의 작품 갤러리관입니다. 원하는 작품을 클릭하시면 해당 designer의 개인 페이지로 이동합니다.
                    </div>
                    <div className='faqItem' onClick={() => this.showaw(5)}><div className='qs'>
                        Q. FAQ 페이지란?</div>
                    </div>
                    <div className={`aw ${this.state.show5}`}>
                        A. 자주 묻는 질문을 모아둔 페이지입니다.
                    </div>

                    <h6 className='intro'>Plan/Avatar</h6>
                    <span className='divider' />

                    <div className='faqItem' onClick={() => this.showaw(6)}><div className='qs'>
                        Q. 사용한 프로그래밍 언어?</div>
                    </div>
                    <div className={`aw ${this.state.show6}`}>
                        A. html / css / javascript
                    </div>
                    <div className='faqItem' onClick={() => this.showaw(7)}><div className='qs'>
                        Q. DB구현 및 연동환경?</div>
                    </div>
                    <div className={`aw ${this.state.show7}`}>
                        A. DB는 mongodb 연결은 mongoose를 통해 하였으며 사용한 기술들은 express, mongoose, React, react-router, react-router-dom, redux-thunk, axios, react-addons-update, inspector
                    </div>
                    <h6 className='intro'>Introduce</h6>
                    <span className='divider' />
                    <div className='faqItem' onClick={() => this.showaw(8)}><div className='qs'>
                        Q. 웹디파인더 개발 참여자?</div>
                    </div>
                    <div className={`aw ${this.state.show8}`}>
                        A. 컴퓨터정보과 17학번 김성민, 김예지, 장진호, 박혜은 총 4명의 학생입니다.
                    </div>
                </div>
            </div>
        )
    }
}