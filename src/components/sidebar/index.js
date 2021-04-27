import { useContext } from "react";
import User from "./user";
import Suggestions from "./suggestions";
import LoggedInUserContext from "../../context/logged-in-user";

export default function Sidebar() {
  const {
    user: { docId = "", fullName, username, userId, following } = {},
  } = useContext(LoggedInUserContext);

  // console.log("user in sidebar", fullName, username, userId);
  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}
