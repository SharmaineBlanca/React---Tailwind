function Header(){
    return(
        <header className="basis-44">
            <nav>
            <ul class="flex">
                <li class="mr-6">
                    <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
                </li>
                <li class="mr-6">
                    <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
                </li>
                <li class="mr-6">
                    <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
                </li>
                <li class="mr-6">
                    <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
                </li>
             </ul>
            </nav>
        </header>
    );
}

export default Header