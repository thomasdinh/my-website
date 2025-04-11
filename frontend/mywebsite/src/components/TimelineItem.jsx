import '../css/TimelineItem.css'

export class timestamp{
    constructor(date, job, description){
        this.date = date;
        this.job = job;
        this.description = description;
    }
}




function TimelineItem({timestamp}) {
    return (
        <div className="timeline-container">
            <div className="timeline-year">{timestamp.date}</div>
            <div className="timeline-content">
                <h3>{timestamp.job}</h3>
                <p>{timestamp.description}</p>
            </div>
        </div>
    );
}

export default TimelineItem;
