import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show the fallback UI on error
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log error if needed
    console.error("An error occurred:", error, info);

    // Set a timeout to refresh the page after an error occurs
    setTimeout(() => {
      window.location.reload();
    }, 3000); // 3-second delay
  }

  render() {
    if (this.state.hasError) {
      // Optional: show fallback UI while waiting for the reload
      return <h1>Something went wrong. Refreshing the page...</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
