import styles from "./TodayActivity.module.css";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import { useTodayActivity } from "./useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

// const StyledToday = styled.div``;

// const TodayList = styled.ul``;

// const NoActivity = styled.p``;

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();
  return (
    <div className={styles.today}>
      <Row type="horizontal">
        <Heading type="h2">Today</Heading>
      </Row>
      {!isLoading ? (
        activities?.length > 0 ? (
          <ul className={styles.todayList}>
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </ul>
        ) : (
          <p className={styles.noActivity}>No activity today...</p>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default TodayActivity;
