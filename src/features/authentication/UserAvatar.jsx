import styles from "./UserAvatar.module.css";
import { useUser } from "./useUser";

const UserAvatar = () => {
  const { user } = useUser();
  const { avatar, fullName } = user.user_metadata;
  return (
    <div className={styles.userAvatar}>
      <img
        src={avatar || "/default-user.jpg"}
        alt={fullName}
        className={styles.avatar}
      />
      <span>{fullName}</span>
    </div>
  );
};

export default UserAvatar;
