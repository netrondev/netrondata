import "tailwindcss/tailwind.css";
import "../src/styles/globals.css";

import type { GlobalProvider } from "@ladle/react";
import { useLadleContext } from "@ladle/react";
import { Component, ReactNode } from "react";

class ErrorBoundary extends Component<{ children: ReactNode }, {}> {
  state = {
    hasError: false,
    error_message: "",
  };
  constructor(props) {
    super(props);
    this.state = { hasError: false, error_message: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log({ error, errorInfo });
    this.setState({ error_message: error.message });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="text-red-500 border border-red-500 p-2 rounded">
          <div className="font-bold">ERROR</div>
          {this.state.error_message}
        </div>
      );
    }

    return this.props.children;
  }
}

export const Provider: GlobalProvider = ({ children, globalState }) => {
  const ctx = useLadleContext();

  return (
    <div className={ctx.globalState.theme === "light" ? "" : "dark"}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
  );
};
