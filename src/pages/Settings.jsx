import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Settings() {
  return (
    <Row direction="y">
      <Heading>Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;