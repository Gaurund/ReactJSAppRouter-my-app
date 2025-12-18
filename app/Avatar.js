import { getImageUrl } from './utils.js';

export default function Avatar({ person, size }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
