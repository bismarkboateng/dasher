type SidebarStore = {
    isOpen: boolean,
    openSidebar: () => void,
    closeSidebar: () => void,
}

type Blog = {
    title: string;
    content: string;
    date_posted: string;
    author: string;
}

type Product = {
    product_name: string;
    brand: string;
    color: string;
    size: number;
    price: number;
    quantity: number;
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
    handleResetPassword: (email) => void;
    signUpLoadingState: string;
    signInLoadingState: string;
    signUpError: string;
}

