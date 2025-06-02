import TimelineItem from "./TimelineItem";
import "../App.css";

function Timeline() {
  const timelineData = [
    {
      text: "Form Research Team",
      date: "Spring 2025",
    },
    {
      text: "Write Literature Review",
      date: "Fall 2025",
    },
    {
      text: "Write Thesis Proposal",
      date: "Fall 2025",
    },
    {
      text: "Defend Thesis Proposal",
      date: "Spring 2026",
    },
    {
      text: "Present at Do Good showcase",
      date: "Fall 2026",
    },
  ];
  if (timelineData.length > 0) {
    return (
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    );
  }
}

export default Timeline;
