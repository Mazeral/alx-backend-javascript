import ClassRoom from './0-classroom';

export default function initializeRooms() {
  // new Keyword here is bery important, the code woudln't work without it
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
