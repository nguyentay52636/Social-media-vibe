import React from 'react'
import UserMenu from '../MenuDropdown/UserMenu'
import MenuDropdown from '../MenuDropdown/MenuDropdown'
import NotificationsDropdown from '../MenuDropdown/NotificationsDropdown'
import MessagesDropdown from '../MenuDropdown/MessagesDropdown'

export default function RightSectionHeader({ handleLogout }: { handleLogout: () => void }) {
    return (
        <div className="flex items-center space-x-1 lg:space-x-2 justify-end">
            {/* Menu Dropdown - Hidden on tablet */}
            <div className="hidden xl:block">
                <MenuDropdown />
            </div>
            {/* Messages Dropdown */}
            <MessagesDropdown />
            {/* Notifications Dropdown */}
            <NotificationsDropdown />
            {/* User Menu */}
            <UserMenu handleLogout={handleLogout} />
        </div>
    )
}
