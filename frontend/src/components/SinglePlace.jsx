import { useParams } from "react-router";

export default function SinglePlace() {
  const { id } = useParams();
  /* Sub Page for a single Magical Place */
  /* Props von places.data weitergeben */

  return (
    <>
      <h1>Single Magical Place with ID: {id}</h1>
    </>
  );
}
