import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='mx-auto px-12'>
            <div className='questions '>
                <div className='individual-question mb-4'>
                    <h1>Difference between SQL and NoSQL</h1>
                    <p><i><strong> Answer:</strong></i> SQL databases are primarily called as RDBMS (Relational Databases ); whereas NoSQL database are primarily called as non-relational or distributed database.
                        <br />
                        SQL databases defines and manipulates data based structured query language (SQL).NoSQL has the flexibility.It has  dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.
                        <br />
                        SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores.This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.
                    </p>
                </div>

                <div className='individual-question mb-4'>
                    <h1>What is JWT, and how does it work?</h1>
                    <p><i><strong> Answer:</strong></i> JSON Web Token (JWT) is used for securely transmitting information  as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                        <br />
                        The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                        JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                        <br />
                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                        1. User sign-in using username and password or google/facebook. <br />
                        2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br />
                        3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br />
                        Resource server then verifies the authenticity of the token using the secret salt/ public key..</p>
                </div>

                <div className='individual-question mb-4'>
                    <h1>What is the difference between javascript and NodeJS?</h1>
                    <p><i><strong> Answer:</strong></i>Considering whether it is programming language or not, JavaScript is a properly funcational high-level programming language whereas Node.js is a run time environment built on google’s v8 engine.

                        JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.

                        JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.

                        JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development

                        JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.</p>
                </div>

                <div className='individual-question mb-4'>
                    <h1>How does NodeJS handle multiple requests at the same time?</h1>
                    <p><i><strong> Answer:</strong></i>With NodeJS, the request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request. NodeJS receives various client requests and take them to EventQueue. It is built with the machanism of event-driven architecture.Also NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                        <br />
                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;