import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
function Sidebar() {
  return (
    <div className="w-[30%] sm:w-[60%] border-r border-slate-500 py-4 sm:pl-4 flex flex-col pr-0">
      <SearchInput />
      <div className="divider px-2 my-2"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
}

export default Sidebar;
