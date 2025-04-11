import React from 'react';
import '../css/Timeline.css';

const Timeline = () => {
  const events = [
    { date: '2021-01-01', title: 'Event 1', description: 'Description of Event 1' },
    { date: '2022-02-15', title: 'Event 2', description: 'Description of Event 2' },
    { date: '2023-03-20', title: 'Event 3', description: 'Description of Event 3' },
  ];

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-date">{event.date}</div>
          <div className="timeline-content">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
