import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

function ComponentC() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      User Context Value: {user} - Channel Context Value: {channel}
    </div>
  );
}

export default ComponentC;
