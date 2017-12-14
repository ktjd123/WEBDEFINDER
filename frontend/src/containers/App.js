import React from 'react';

import 'css/App.css';

import Profile from 'components/profile/Profile'

export default class App extends React.Component {
    render() {
        return (
            <div className='wrapper app'>
                <div>
                    <div>
                        <h1>웹디파인더</h1>
                        <h6>WEB DEFINE + WEB FINDER</h6>
                        <div>
                            <div className='first'>
                                <img src='/first.jpg' alt='' />
                                <p>많은 사람들에게 쉽고 빠르게 정보를 전달하고 싶을 때 웹 페이지를 만드는 것은 좋은 방법이다. 누구나 홈페이지를 만들 수는 있지만 사용자들의 관심을 끌 수 있는 홈페이지를 만든다는 것은 그만큼 어렵다는
            것을 의미한다. 고객에 대한 서비스 제공으로서, 기업 이미지의 증진을 위한 홍보 수단으로서, 무엇보다 마케팅을 위한 판매 증진의 수단으로서 웹디자이너는 필수적인 역할을 담당하고 있다. 시간과 공간에
            제약이 없다는 장점과 저렴한 비용으로 24시간 제공할 수 있다는 장점때문에 무한한 마케팅을 위한 수단으로 사용할 수 있다. 이러한 무한한 가능성을 지닌 홈페이지를 꾸미는 것이 웹디자이너이다. 그러나
            그러한 웹디자이너를 찾는 것은 쉽지않다. 그것이 이 사이트가 개발된 배경이다.</p>
                            </div>
                            <div className='second'>
                                <p>아무리 창의적인 사고를 가진 웹 디자이너라 하더라도, 언제나 새로운 아이디어들이 떠오르는 것만은 아닐 것이다. 그럴 때, 다른 디자이너의 작품을 보면서 영감도 불러일으킬 수 있고 더욱 열정을 가질 수
            있다. 자신의 작품뿐만 아니라 다른 사람의 작품에도 많은 관심을 기울이면 좋다. 또한, 자신의 작품을 다른이들에게 공유 함으로써 고용의 기회를 얻을 수 있다. 이렇게 웹디파인더를 이용하면 유용한
            점이 많다.</p>
                            </div>
                        </div>
                        <div className='divider'></div>
                        <div className='developer'>
                            <h1>DEVELOPER</h1>
                            <div className='profileCon'>
                                <Profile title="김성민" car="HTML, CSS, JS, JAVA, JSP, C, C#, SWIFT, REACT, NODE, EXPRESS, MONGODB" fbLink="https://www.facebook.com/ktjd123" isLink="https://www.instagram.com/ktjd123" imgLink="profile.jpeg" />
                                <Profile title="박혜은" car='HTML, CSS, JS, JSP' fbLink="https://www.facebook.com/ktjd123" isLink="https://www.instagram.com/ktjd123" imgLink="phe.jpg" />
                                <Profile title="김예지" car='JS, Python' fbLink="https://www.facebook.com/ktjd123" isLink="https://www.instagram.com/ktjd123" imgLink="" />
                                <Profile title="장진호" car="NOT AVAILABLE" isLink="https://www.instagram.com/ktjd123" imgLink='jjh.jpg' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='none'>
                    <h1>CONTACT</h1>
                    <h5>k9326239@gmail.com</h5>
                    <h5>010-6614-1729</h5>
                    <h5>www.webdefinder.com</h5>
                </div>
            </div>
        )
    }
}