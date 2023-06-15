type ToggleSidebarButtonProps = {
  text: string;
}

const ToggleSidebarButton: React.FC<ToggleSidebarButtonProps> = ({text}) => {
  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar') as HTMLDialogElement | null;
    const main = document.getElementById('main') as HTMLElement | null;
    if (sidebar && sidebar.open) {
      sidebar.close(); // Close the sidebar dialog
      main?.classList.remove('ml-64');
    } else if (sidebar) {
      main?.classList.add('ml-64');
      sidebar.showModal(); // Open the sidebar dialog
    }
  };

  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded h-8" onClick={toggleSidebar}>
      {text}
    </button>
  );
};

export default ToggleSidebarButton;
