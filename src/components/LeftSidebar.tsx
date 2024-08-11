// ** In the name of Allah ♥️
'use client';

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LeftSidebar = () => {
    const pathname = usePathname();
    const router = useRouter
    return (
        <section className="left_sidebar">
            <nav className="flex flex-col gap-6">
                <Link href='/' className="flex cursor-pointer items-center gap-1 pb-10 max-ld:justify-center">
                    <Image
                        src='/images/prodevers.png'
                        alt='logo'
                        width={40}
                        height={40}
                    />
                    <h1 className="text-24 font-extrabold text-white max-lg:hidden">fadelcast</h1>
                </Link>
                {sidebarLinks.map(({ route, label, imgURL }) => {
                    const isActive = pathname === route || pathname.startsWith(`${route}/`)

                    return <Link href={route} key={label} className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start", {
                        'bg-nav-focus border-r-4 border-blue-1': isActive
                    })}>
                        <Image src={imgURL} alt={label} width={24} height={24} />
                        <p>{label}</p> 
                    </Link>
                })
                }
            </nav>
        </section>
    )
};

export default LeftSidebar;