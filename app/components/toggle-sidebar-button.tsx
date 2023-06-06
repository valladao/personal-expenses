const ToggleSidebarButton: React.FC = () => {
  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar') as HTMLDialogElement | null;
    if (sidebar && sidebar.open) {
      sidebar.close(); // Close the sidebar dialog
    } else if (sidebar) {
      sidebar.showModal(); // Open the sidebar dialog
    }
  };

  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={toggleSidebar}>
      Toggle Sidebar
    </button>
  )
}

export default ToggleSidebarButton;
