import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('BULUBot Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '400px',
          margin: '20px auto',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#fff5f5'
        }}>
          <h3 style={{ color: '#d67c06', marginBottom: '10px' }}>
            🤖 BULUBot Encountered an Error
          </h3>
          <p style={{ color: '#666', marginBottom: '15px' }}>
            Something went wrong, but don't worry! Please try refreshing the page.
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              backgroundColor: '#d67c06',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            🔄 Refresh Page
          </button>
          <div style={{ marginTop: '15px', fontSize: '12px', color: '#999' }}>
            Need help? Contact: <a href="mailto:info@burhanulu.com" style={{ color: '#d67c06' }}>info@burhanulu.com</a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;