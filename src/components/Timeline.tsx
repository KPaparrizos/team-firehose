import TimelineItem from "./TimelineItem";
import "../App.css";
import "../components-css/Timeline.css";

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
      text: "Conduct Stakeholder Interviews",
      date: "Fall 2025 - Spring 2026",
    },
    {
      text: "Defend Thesis Proposal",
      date: "Spring 2026",
    },
    {
      text: "Obtain IRB Approval",
      date: "Spring 2026",
    },
    {
      text: "Conduct Experiments on Kickback Forces",
      date: "Spring 2026",
    },
    {
      text: "Present at Do Good showcase",
      date: "Fall 2026",
    },
    {
      text: "Design Hose/Nozzle Prototype",
      date: "Fall 2026",
    },
    {
      text: "Fabricate Hose/Nozzle Prototype",
      date: "Spring 2026",
    },
    {
      text: "Test and Adjust Prototype",
      date: "Spring 2026 - Fall 2027",
    },
    {
      text: "Draft Thesis",
      date: "Fall 2027",
    },
    {
      text: "Finalize Thesis",
      date: "Spring 2028",
    },
    {
      text: "Present and Defend Thesis",
      date: "Spring 2028",
    },
    
  ];
  if (timelineData.length > 0) {
    return (
      <div className="timeline-container">
      <div className="timeline-nozzle"></div>
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    );
  }
}

export default Timeline;
