

export default function TopBar() {

    return (
        <div className="w-full px-3 py-2 flex justify-between">
            <div className="flex w-2/4 justify-between">
                <button className="p-3 bg-primary_blue rounded-md">
                    <i className="pi pi-cog" />
                </button>

                <button className="p-3 rounded-md">
                    <i className="pi pi-chart-bar" />
                </button>

                <button className="p-3 rounded-md">
                    <i className="pi pi-palette" />
                </button>
            </div>
            <div className="w-2/4">
                <button className="p-3 rounded-md flex">
                    <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.858 1.70884H8.35529C12.8307 8.77531 10.2201 11.0327 8.35529 11.278H14.5384L10.858 1.70884Z" fill="white" />
                        <path d="M12.0357 11.278C18.6097 11.278 26.8986 15.8418 26.7557 20.1111C27.1992 14.8112 20.8238 10.3456 18.6801 9.06975C18.0132 9.21697 15.58 9.9825 12.0357 11.278Z" fill="white" />
                        <path d="M14.8524 11.1308C8.27844 11.1308 -0.0104789 15.6946 0.132434 19.9639C-0.311043 14.664 6.27767 10.3456 8.42136 9.06975C9.08828 9.21696 11.3082 9.83528 14.8524 11.1308Z" fill="white" />
                        <path d="M18.6801 9.06975C12.1061 9.06975 3.81719 4.50599 3.9601 0.236664C3.51663 5.53652 10.1053 9.85491 12.249 11.1308C12.916 10.9836 15.1359 10.3653 18.6801 9.06975Z" fill="white" />
                        <path d="M8.35529 9.06975C14.9293 9.06975 23.2182 4.50599 23.0753 0.236664C23.5187 5.53652 16.93 9.85491 14.7863 11.1308C14.1194 10.9836 11.8995 10.3653 8.35529 9.06975Z" fill="white" />
                    </svg>
                    <span>OPOMO</span>
                </button>
            </div>
        </div>
    )
}