const toggleSidebar = () => {
  const sidebar = document.getElementById('sidebar') as HTMLDialogElement | null;
  if (sidebar && sidebar.open) {
    sidebar.close(); // Close the sidebar dialog
  } else if (sidebar) {
    sidebar.showModal(); // Open the sidebar dialog
  }
};

export default function ToggleSidebarButton() {
  return (
    <button onClick={toggleSidebar}>Toggle Sidebar</button>
  )
}
