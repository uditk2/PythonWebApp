import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6" data-gjs-editable="true">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500" data-gjs-editable="true">© {new Date().getFullYear()} Python Web Application. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer