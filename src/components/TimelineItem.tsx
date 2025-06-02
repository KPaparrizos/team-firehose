import "../App.css";

function TimelineItem({ data }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <time>{data.date}</time>
        <p>{data.text}</p>
        <span className="circle" />
      </div>
    </div>
  );
}

export default TimelineItem;
