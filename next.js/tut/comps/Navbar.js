import Link from 'next/link'

const Navbar = () => {
    return ( 
        <div>
            <nav>
                <div className="logo">
                    <h1>Reza Aghajani</h1>
                </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/lists"><a>Lists</a></Link>
            </nav>
        </div>
     );
}
 
export default Navbar;
