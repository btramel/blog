import Link from "../node_modules/next/link"

function Header() {
  return (
    // Tailwind utility classes stylize our elements with mobile in mind first
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        {/* Points to homepage */}
        <Link href="/">
          <img 
            src="https://links.papareact.com/yvf"
            className="w-40 hover:scale-105 object-contain cursor-pointer" 
            alt="medium logo"
            />
        </Link>
        {/* On mobile, these elements are hidden */}
        <div className="hidden md:inline-flex items-center space-x-5">
          {/* rel="noreferrer" avoids a security issue with target="_blank" in older browsers */}
          <h3 className="hover:scale-105">
          <a 
          href="https://github.com/btramel/blog"
          target="_blank"
          rel="noreferrer"
          >About</a></h3>
          {/* Opens an email addressed to me */}
          <h3 className="hover:scale-105">
          <a
          href="mailto:bradtramel@gmail.com"
          >Contact</a></h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full hover:bg-green-500">Follow</h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        {/* Aesthetic sign in option. Not functional */}
        <h3 className="hover:scale-105">Sign In</h3>
        <h3 className="sm:border sm:px-4 py-1 rounded-full border-green-600 hover:bg-green-600 hover:text-white">Get Started</h3>
      </div>
    </header>
  )
}

export default Header