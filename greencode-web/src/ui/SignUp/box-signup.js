import React from 'react';
import { Link } from 'react-router-dom';

const BoxSignUp = () => {
    return (
        <>
            <div className="col-12 col-lg-5">
                <div style={{ overflow: 'hidden' }}>
                    <div
                        style={{
                            width: '300vw',
                            transform: 'translateX(0)',
                            transition: 'all 1000ms',
                            display: 'flex',
                        }}
                    >
                        <div style={{ width: '100vw', background: 'red', height: '100vh' }}>
                            conteudo 1
                    </div>
                        <div style={{ width: '100vw', background: 'green', height: '100vh' }}>
                            {' '}
                            conteudo 2
                    </div>
                        <div style={{ width: '100vw', background: 'cyan', height: '100vh' }}>
                            {' '}
                            conteudo 3
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-7"></div>
        </>
    )
}

export default BoxSignUp;