import { Nav } from "react-bootstrap";

export default function Navlink({ nameLink, href }) {
  return <Nav.Link href={href}>{nameLink}</Nav.Link>;
}
