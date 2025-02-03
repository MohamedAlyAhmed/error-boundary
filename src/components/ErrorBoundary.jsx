import React from "react";
import FallBack from "./FallBack";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, errorInfo: null };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      console.log("error", error);
      return { hasError: true, errorInfo: `${error}` };
    }

    componentDidCatch(error, info) {
      console.log("componentDidCatch", error, info);
    }
  
    render() {
      const { hasError, errorInfo } = this.state;
      console.log("error in render", hasError)
      if (hasError) {
        // You can render any custom fallback UI
        return <FallBack errorInfo={errorInfo} />;
      }
  
      return this.props.children;
    }
  }

export default ErrorBoundary;