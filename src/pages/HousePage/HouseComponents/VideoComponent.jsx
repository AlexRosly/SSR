const smallS = { width: '426', height: '236' };
const mediumS = { width: '462', height: '256' };

export default function VideoComponent({ srcVideo = 'https://www.youtube.com/embed/6g4fv2LIa20', size = 'medium' }) {
  const sizeVideo = size === 'small' ? smallS : mediumS;

  return (
    <div>
      <iframe
        {...sizeVideo}
        src={srcVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
