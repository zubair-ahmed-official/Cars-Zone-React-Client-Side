// import React from 'react';

import { Helmet } from "react-helmet";

const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Cars Zone | Blogs</title>
            </Helmet>
            <h2>Questions and Answers</h2>

            <h3>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <p>
                An access token is a credential used to access protected resources in a system, while a refresh token is used to obtain a new access token once the original one expires. Access tokens are typically short-lived and used for authorization, while refresh tokens have a longer lifespan and help maintain user sessions. Access tokens can be stored securely on the client-side in memory or local storage, while refresh tokens should be stored in a more secure manner, such as an HTTP-only cookie or encrypted storage.
            </p>

            <h3>2. Compare SQL and NoSQL databases.</h3>
            <p>
                SQL databases are based on a relational data model with predefined schemas, ensuring strong consistency and ACID properties. NoSQL databases, on the other hand, are non-relational, provide flexible schema designs, and prioritize performance and scalability over strict consistency. They are horizontally scalable and handle unstructured data effectively.
            </p>

            <h3>3. What is Express.js?</h3>
            <p>
                Express.js is a web application framework for Node.js that simplifies the process of building web applications and APIs. It provides a minimalistic and flexible set of features, including routing, middleware, and request/response handling.
            </p>

            <h3>4. What is NestJS?</h3>
            <p>
                NestJS is a TypeScript-based progressive web application framework for building efficient and scalable server-side applications. It is built on top of Express.js and offers a modular and extensible architecture, combining features from various frameworks.
            </p>

            <h3>5. What is MongoDB aggregate and how does it work?</h3>
            <p>
                MongoDB's aggregate is a powerful data processing and analysis framework. It allows you to perform complex data transformations, including filtering, grouping, sorting, joining, and calculations on documents. Aggregation pipelines are created using a JSON-like syntax, with each stage taking the output of the previous stage. They can be executed to retrieve aggregated results from MongoDB collections.
            </p>
        </div>
    );
};

export default Blogs;