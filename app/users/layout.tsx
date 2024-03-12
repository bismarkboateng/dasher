"use client"

import { useModalStore } from "@/store/ModalStore"
import AddModal from "@/components/AddModal"

type UsersLayoutType = {
    children: React.ReactNode;
}

export default function UsersLayout({ children }: UsersLayoutType) {
  const isOpen = useModalStore(state => state.isOpen)

  return (
    <section className="relative">
     {isOpen && <AddModal />}
     {children}
    </section>
  )
}
