const SidebarIcon = ({ icon, classed, text = 'tooltip...' }) => {
    let classes = "group sidebar-icon";
    if (classed) classes += "-secondary";
    
    return (     
        <div className={classes}>
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
            <span className="absolute top-3 left-[-16px] bg-gray-400 w-3 h-6 rounded-lg scale-0 group-hover:scale-100 transition-all duration-300 ease-linear"></span>
    </div>
     );
}
 
export default SidebarIcon;