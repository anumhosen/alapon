import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import useConversation from "../../zustand/useConversation.js";
import LogoutButton from "./LogoutButton.jsx";

function Sidebar() {
  const { selectedConversation } = useConversation();

  return (
    <div
      className={`w-full sm:w-1/3 ${
        selectedConversation ? "hidden" : "flex"
      } sm:flex flex-col sm:border-r border-slate-500 p-4`}
    >
      <SearchInput />
      <div className="divider p-0 m-0 mt-2"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
}

export default Sidebar;
