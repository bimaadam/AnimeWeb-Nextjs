import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
    return (
        <header className="bg-color-blue">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link href="/" className="font-bold text-2xl bg-color-accent rounded-2xl">ANIME LIST | DEVELOPT BY BIMA ADAM</Link>
                <InputSearch />
                <UserActionButton/>
            </div>
        </header>
    )
}

export default Navbar