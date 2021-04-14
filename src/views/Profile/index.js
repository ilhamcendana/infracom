import React, { Component } from 'react';
import './style.scss';
import Lottie from 'react-lottie';
import * as illuAnimation from 'assets/animation/coding.json';

//global utils
import { FETCH_PROFILE } from 'utils/fetch/profile';

//global components
import Loading from 'views/Loading';

const options = {
    loop: true,
    autoplay: true,
    animationData: illuAnimation.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: {}
        }
    }

    async componentDidMount() {
        await FETCH_PROFILE(this);
    }

    renderInfo(title, value, masking) {
        return (
            <div key={title}>
                <p className='item-title'>{title}</p>
                {masking ? <a target='_blank' rel='noreferrer' href={value}>{masking}</a> : <p className='item-body'>{value}</p>}
            </div>
        )
    }

    render() {
        const { data } = this.state;
        if (this.state.loading) return <Loading/>
        return (
            <div className='profile'>
                <div className="top">
                    <div className='text-container'>
                        <p>Hello! I’m <br />Ilham <span>Cendana</span></p>
                        <p>I’m a Front End Programmer. Goal Oriented Web and Mobile Developer with strong commitment to collaboration and solution - oriented problem solving. Commited to high standarts of web design, user experience, usability and speed for multiple types of end users.</p>
                    </div>
                    <div className='lottie-container'>
                        <Lottie
                            options={options}
                            width={'100%'}
                            height={230}
                        />
                    </div>
                </div>
                <div className="bottom">
                    <p className='headTitle'>About Me</p>
                    <div className='about-container'>
                        <div className='subAbout-container'>
                            <div className='abouts'>
                                <p className='about-title'>Biodata</p>
                                {this.renderInfo('Birtplace and birthdate', data?.bio?.birthPlaceAndDate)}
                                {this.renderInfo('Age', data?.bio?.age)}
                                {this.renderInfo('Address', data?.bio?.address)}
                            </div>
                            <div className='abouts'>
                                <p className='about-title'>Education</p>
                                {data?.edu?.map((item, i) => (
                                    this.renderInfo(item.schoolName, item.year)
                                ))}
                            </div>
                        </div>
                        <div className='abouts'>
                            <p className='about-title'>Contact</p>
                            {this.renderInfo('Whatsapp', data?.contact?.whatsapp, data?.contact?.whatsapp)}
                            {this.renderInfo('LinkedIn', data?.contact?.linkedin, 'ilhamcendana')}
                            {this.renderInfo('Github', data?.contact?.github, 'ilhamcendana')}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;