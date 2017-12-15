import React from 'react';
import Card from 'components/Works/Card'

import 'css/Works.css'

export default class Works extends React.Component {
    render() {
        return (
            <div className='wrapper works'>
                <h1>WORKS</h1>

                <div className='column-container'>
                    <div className='container'>
                        <Card title="프리랜서 초윤희" email="treashya@naver.com" phone="010-1234-1234" career={["2004 ~ 2006 WENEC Inc. Design part. designer", "2006 ~ 2008 NETPLAN Design part. Team leader", "2008 ~ 2017 Freelancer WEB-Designer / A Part-time Education Instructors"]} imgSrc='http://www.treashya.com/img/portfolio/03_shasha/02.jpg'/>
                        <Card title="프리랜서 박규린" email="rindesign7@gmail.com" phone="010-6395-****" career={[]} imgSrc="http://payload505.cargocollective.com/1/22/731580/12405843/web_hangul_01_1600_c.jpg"/>
                        <Card title="프리랜서 반정아" email="jabahn21@naver.com" phone="" career={['DNAROHLAB 홈페이지 제작.(2017년 7월)','BAHNLAB 연구실 홈페이지 리뉴얼(2016년 11월)','단백질기능제어이행연구센터 홈페이지 제작.(2009년 9월)','연세대학교 생명공학과 홈페이지 제작.(2009년 9월)']} imgSrc="http://www.jabahn.com/wp-content/uploads/2017/06/kwonlab.jpg"/>
                    </div>
                    <div className='container'>
                        <Card title="프리랜서 프롬윤" email="fromyooooon@naver.com" phone="010-3161-****" career={[]} imgSrc="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18889252_809210845903532_3159852974910472192_n.jpg"/>
                        <Card title="프리랜서 김헤인" email="hyen.freelancer@gmail.com" phone="010-4388-****" career={[]} imgSrc="https://scontent.cdninstagram.com/t51.2885-15/s640x640/e35/c0.18.1080.1080/16788987_249963655452957_5469537213895147520_n.jpg"/>
                        <Card title="프리랜서 이정훈" email="info@visualoft.kr" phone="010-4005-4853" career={[]} imgSrc="http://work.hoonyi.net/wp-content/uploads/sites/2/2014/08/cover_coinside.jpg"/>
                    </div>
                    <div className='container'>
                        <Card title="프리랜서 김은비" email="project@kimeunbin.com" phone="010-9891-****" career={[]} imgSrc="http://www.kimeunbin.com/images/big/pic141.jpg"/>
                        <Card title="프리랜서 라혜련" email="babolang@naver.com" phone="010-4447-****" career={['Yourbiz','Madison Avinue','Hackers','Jobkorea']} imgSrc="http://nahye1206.cafe24.com/wp-content/uploads/2016/11/-161010_블랙프라이데이_라혜련-e1478145537322.jpg"/>
                        <Card title="프리랜서 백애영" email="bayweb@naver.com" phone="010-3618-****" career={[]} imgSrc="http://www.aeyong.com/aeyong/data/file/web/thumb/990586001_bC3GmtoM_18.jpg"/>
                    </div>
                </div>

            </div>
        )
    }
}