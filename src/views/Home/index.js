import Button from 'components/Button';
import React, { Component } from 'react';
import './style.scss';
import Lottie from 'react-lottie';
import * as illuAnimation from 'assets/animation/illustration.json';

//global utils
import { FETCH_HOME } from 'utils/fetch/home';
import { ArrowRightOutlined } from '@ant-design/icons';

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

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: []
        }
    }

    async componentDidMount() {
        await FETCH_HOME(this);
    }

    render() {        
        if (this.state.loading) return <Loading/>
        return (
            <div className='home'>
                <div className="top">
                    <div className='text-greeting'>
                        <p>Hello! I’m <br />Ilham <span>Cendana</span></p>
                        <p>I’m a Front End Programmer. Goal Oriented Web and Mobile Developer.</p>
                        <Button onClick={() => window.open('/profile','_self')} className='button-profile' text='View Profile' />
                    </div>
                    <div className="lottie">
                        <Lottie
                            options={options}
                            width={300}
                            height={230}
                        />
                    </div>
                </div>
                <div className="bottom">
                    <p className='headTitle'>My Experience</p>
                    <div className='works-container'>
                        {this.state.data.map((item, i) => (
                            <div className='works touchable-opacity' key={i}>
                                <div className='info'>
                                    <img src={item.image} alt='work' />
                                    <div className='subcontainer'>
                                        <p>{item.title}</p>
                                        <p>{item.year}</p>
                                    </div>
                                </div>
                                <div className='desc'>
                                    <p>{item.description}</p>
                                    <p>Tech: {item.tech}</p>
                                </div>
                                <div className='click-link'>
                                    <a target='_blank' rel="noreferrer" href={item.url}>Visit</a>
                                    <ArrowRightOutlined />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;