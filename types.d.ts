type SidebarStore = {
    isOpen: boolean,
    openSidebar: () => void,
    closeSidebar: () => void,
}

type Shoe = {
    name: string;
    description: string;
    price: string;
    inStock: number;
    size: number;
}

type ShoesType = Shoe[]

type Blog = {
    title: string;
    content: string;
    date_posted: string;
    author: string;
}