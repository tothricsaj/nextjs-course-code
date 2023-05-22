import Link from "next/link";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableData = new Date(date).toLocaleDateString('en-US',{
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formatedAddress = location.replace(', ', '\n');
  const expolreLink = `/events/${id}`;

  return (
    <li>
      <img src={`/${image}`} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableData}</time>
          </div>
          <div>
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={expolreLink}>Expolore Events</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem;