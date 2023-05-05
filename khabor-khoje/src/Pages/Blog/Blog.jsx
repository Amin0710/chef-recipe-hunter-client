// eslint-disable-next-line no-unused-vars
import React from "react";
import { Accordion } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Blog = () => {
	return (
		<div>
			<div>
				<div className="d-flex justify-content-center">
					<Accordion defaultActiveKey="1">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								1. Tell us the differences between uncontrolled and controlled
								components.
							</Accordion.Header>
							<Accordion.Body>
								uncontrolled components can be difficult to manage, while
								controlled components have a specific input and output and are
								designed to be more predictable and easier to manage.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								2. How to validate React props using PropTypes?
							</Accordion.Header>
							<Accordion.Body>
								In React, we can use the PropTypes library to validate the props
								that are passed to our components. Like this:
								<SyntaxHighlighter language="jsx" style={darcula}>
									{`
                                    import PropTypes from 'prop-types';
                                    function MyComponent(props) {
                                      return <div>{props.text}</div>;
                                    
                                    MyComponent.propTypes = {
                                      text: PropTypes.string.isRequired,
                                    }  
                                    export default MyComponent;
                                    `}
								</SyntaxHighlighter>
								In this example, If the text prop is not a string, or if it is
								not provided at all, PropTypes will generate a warning in the
								console.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								3. Tell us the difference between nodejs and express js.
							</Accordion.Header>
							<Accordion.Body>
								Node.js is a server-side runtime environment that allows me to
								run JavaScript code on the server. On the other hand Express.js
								is a web application framework that is built on top of Node.js.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								4. What is a custom hook, and why will you create a custom hook?
							</Accordion.Header>
							<Accordion.Body>
								A custom hook is a reusable function in React that allows me to
								extract component logic into a reusable function.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default Blog;
