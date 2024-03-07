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

type User = {
    name: string;
    email: string;
    uid: string;
}

type AuthStore = {
    user: User | null;
    handleSignUp: (firstName, email, passowrd) => void;
    handleSignIn: (name, email, password) => void;
    handleSignOut: () => void;
    signUpLoadingState: string;
    signInLoadingState: string;
    signUpError: string;
}

