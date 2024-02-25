import Link from 'next/link';
import React from 'react';
import AnimatedGradientBackground from '../animationLayout/animationLayout';

function Login() {
    return (
        <div>
            <AnimatedGradientBackground currentRoute={'/login'}>
            <Link href={"/ru/register"}>
                register
            </Link>
            </AnimatedGradientBackground>
        </div>
    );
}

export default Login;