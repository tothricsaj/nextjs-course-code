import { EventList } from "./event-item";
function EventList(props) {
  const { items } = props;

  return (
    <ul>
      {
        items.map((event) => <EventList />)
      }
    </ul>
  )
}

export default EventList;