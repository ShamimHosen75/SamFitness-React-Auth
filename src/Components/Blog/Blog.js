import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='container p-5 pb-5'>
                <div className='col-md'>
                    <h3>Difference between Authorization & Authentication?</h3>
                    <p><strong>Authentication :</strong> <br />
                        Authentication verifies who the user is.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Authentication is the first step of a good identity and access management process.Authentication is visible to and partially changeable by the user.<br />
                        <strong>Authorization:</strong> <br />
                        Authorization determines what resources a user can access.Authorization works through settings that are implemented and maintained by the organization.Authorization always takes place after authentication.Authorization isn’t visible to or changeable by the user.</p>
                </div>

                <div className='col-md'>
                    <h3>Why are you using firebase? What other options do you have to implement Authentication?</h3>
                    <p><strong>Firebase </strong>is Google’s mobile application development platform that helps you build, improve, and grow your app.<br />
                        Some authentication factors are stronger than others. The level of security entirely depends on the information you try to access in each case. We live in an era of ever-increasing data breaches. Simple password credentials are not so sufficient anymore to authenticate users online. Companies and organizations set up multiple factors of authentication for more security. Each one of them has its unique strengths and weaknesses. This is why we need to understand the different methods to authenticate users online. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;