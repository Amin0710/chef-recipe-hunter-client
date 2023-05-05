// eslint-disable-next-line no-unused-vars
import React from "react";

const Blog = () => {
	return (
		<div>
			<div>
				<div className="d-flex justify-content-center">
					<div>
						<h3>1. When do we use context API?</h3>
						<p>
							If my global state needs to be accessed by multiple components in
							react then i use context API in React.
						</p>

						<h3>2. what is custom hook?</h3>
						<p>
							In React custom hook allows me to reuse stateful logic across
							multiple components.
						</p>

						<h3>3. what is useRef?</h3>
						<p>In React custom hook allows me to create a mutable reference.</p>

						<h3>4. what is useRef?</h3>
						<p>
							In React custom hook allows me to to memoize a value, it will only
							run when its dependencies change.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
