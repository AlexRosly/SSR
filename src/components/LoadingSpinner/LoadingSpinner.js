import './LoadingSpinner.scss';

function LoadingSpinner({ size = '80px' }) {
  const style = { width: `${size}`, height: `${size}` }

  return (
    <div className="lds-ring" style={style}>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
    </div>
  );
}

export default LoadingSpinner;
