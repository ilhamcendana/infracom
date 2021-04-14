import React, { Component } from 'react';
import Lottie from 'react-lottie';
import './style.scss';
import * as illuAnimation from 'assets/animation/work-from-home.json';

//global components
import Input from 'components/Input';
import Button from 'components/Button';
import { LOGIN } from 'utils/fetch/auth';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: illuAnimation.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            loading: false
        }
    }

    async onSubmit() {
        const { username, password } = this.state;
        await LOGIN(this, username, password);
    }

    render() {
        return (
            <div className='login-container'>
                <div className="top-animation">
                    <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300} />
                </div>
                <div className='login-form-container'>
                    <p>Sign In</p>
                    <form>
                        <Input
                            placeholder='Username'
                            type='text'
                            className='mrb'
                            onChange={e => this.setState({ username: e.target.value })}
                        />
                        <Input
                            placeholder='Password'
                            type='password'
                            className='mrb'
                            onChange={e => this.setState({ password: e.target.value })} />
                        <Button
                            text='Sign In'
                            variant='primary'
                            className='mrb'
                            onClick={this.onSubmit.bind(this)}
                            isLoading={this.state.loading}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;