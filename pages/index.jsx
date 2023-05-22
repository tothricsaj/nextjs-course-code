import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
  return (
    <div>
      <EventList items={getFeaturedEvents()} />
    </div>
  )
}

export default HomePage;