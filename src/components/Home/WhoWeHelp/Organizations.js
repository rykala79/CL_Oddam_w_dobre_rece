import WwhView from "./WwhView";

const organizations = [
  {
    name: "Organizacja “Lorem Ipsum 1”",
    goal: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
    items: "Egestas, sed, tempus",
  },
  {
    name: "Organizacja “Lorem Ipsum 2”",
    goal: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
    items: "Ut, aliquam, purus, sit, amet",
  },
  {
    name: "Organizacja “Lorem Ipsum 3”",
    goal: "Scelerisque in dictum non consectetur a erat nam.",
    items: "Mi, quis, hendrerit, dolor",
  },
  {
    name: "Organizacja “Lorem Ipsum 4”",
    goal: "Cel 4",
    items: "rzeczy 4",
  },
  {
    name: "Organizacja “Lorem Ipsum 5”",
    goal: "Cel 5",
    items: "rzeczy 5",
  },
  {
    name: "Organizacja “Lorem Ipsum 6”",
    goal: "Cel 6",
    items: "rzeczy 6",
  },
];

export default function Organizations() {
  return <WwhView institutions={organizations} />;
}
