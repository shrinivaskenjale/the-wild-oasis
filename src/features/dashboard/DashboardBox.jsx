import styles from "./DashboardBox.module.css";

const DashboardBox = ({ children, className, ...rest }) => {
  return (
    <div className={`${styles.dashboardBox} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default DashboardBox;
