import React from 'react';
import Lottie from 'react-lottie';
import * as illuAnimation from 'assets/animation/orange-search.json';

const options = {
    loop: true,
    autoplay: true,
    animationData: illuAnimation.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

const Loading = () => {
    return (
        <div style={{ width: '100%', minHeight: '100vh',display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center' }}>
            <Lottie
                options={options}
                width={420}
                height={400}
            />
            <p style={{fontFamily:'sans-serif',fontWeight:'600'}}>Loading...</p>
        </div>
    );
}

export default Loading;