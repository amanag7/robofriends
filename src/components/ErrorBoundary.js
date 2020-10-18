import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componeneDidCatch(error, info) {
		this.setState({ hasError: true });
	}

	render() {
		if(this.state.hasError) {
			return <h1>Oops.. That is not okay. Something went wrong</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;