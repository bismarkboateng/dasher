"use client"

import { useModalStore } from "@/store/ModalStore"
import AddModal from "@/components/AddModal"

type UsersLayoutType = {
    children: React.ReactNode;
}

const metadata = {
  title: "All Users"
}

export default function UsersLayout({ children }: UsersLayoutType) {
  const isOpen = useModalStore(state => state.isOpen)

  return (
    <section className="relative w-full h-[100vh] lg:h-[150vh]">
     {isOpen && <AddModal />}
     {children}
    </section>
  )
}
