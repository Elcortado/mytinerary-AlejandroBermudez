import React from 'react'

function Nav() {
  return (
    <div><nav className=" font-medium text-xl flex items-center gap-4">
       
    <a
        href="#"
        className="xl:py-1 xl:px-2 rounded-lg hover:bg-white transition-colors"
    >
        Home
    </a>
    <a
        href="#"
        className="xl:py-1 xl:px-2 rounded-lg hover:bg-white transition-colors"
    >
        
        Cities
    </a>
</nav>
</div>
  )
}

export default Nav