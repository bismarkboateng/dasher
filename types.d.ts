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

type AuthStore = {
    isAuthenticated: boolean;
    signIn: (user) => void;
    signOut: () => void;
    signUp: (email, passowrd) => void;
}

type User = {
    email: string;
    password: string;
}