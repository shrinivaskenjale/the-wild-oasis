import styles from "./Heading.module.css";

const Heading = ({ type, children }) => {
  // Logic to determine the appropriate HTML heading element based on the type prop
  let HeadingElement;

  switch (type) {
    case "h1":
      HeadingElement = "h1";
      break;
    case "h2":
      HeadingElement = "h2";
      break;
    case "h3":
      HeadingElement = "h3";
      break;
    case "h4":
      HeadingElement = "h4";
      break;
    // Add more cases for other heading types if needed
    default:
      HeadingElement = "h1"; // Default to h1 if no valid type is provided
  }

  // Render the appropriate HTML heading element with the children as its content
  return <HeadingElement className={styles.heading}>{children}</HeadingElement>;
};

export default Heading;
