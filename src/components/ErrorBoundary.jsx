import React from 'react';

function ErrorBoundary(props) {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    // Establece el estado de error para true si hay un error
    const originalError = window.onerror;
    window.onerror = (message, url, line, column, error) => {
      setHasError(true);
      if (originalError) {
        originalError(message, url, line, column, error);
      }
    };
  }, []);

  if (hasError) {
    // Muestra un mensaje de error si hay un error
    return <h1>Se Ka-Yo     :/  </h1>;
  }

  return props.children;
}

export default ErrorBoundary;