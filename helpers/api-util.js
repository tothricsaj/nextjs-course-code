export async function getAllEvents() {
  const response = await fetch('https://nextjs-course-8fe63-default-rtdb.firebaseio.com/sales/events.json');
  const data = await response.json();

  const events = [];

  for(const key in data) {
    events.push({
      id: key,
      ...data[key]
    });
  }

  return events;
}
export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
}