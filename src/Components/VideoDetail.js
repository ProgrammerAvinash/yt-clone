import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
      </div>
    </div>
  );
};

export default VideoDetail;
