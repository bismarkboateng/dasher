type SidebarStore = {
    isOpen: boolean,
    openSidebar: () => void,
    closeSidebar: () => void,
}

type ModalStoreType = {
    isOpen: boolean,
    openModal: () => void,
    closeModal: () => void,
    handleCreateUser: (first_name, email) => void,
    loading: string;
}

type ProductModalType = {
    isOpen: boolean,
    handleOpenProductModal: () => void,
    handleCloseProductModal: () => void,
}

type NewUserType = {
    first_name: string;
    email: string;
}

type Blog = {
    id: string;
    title: string;
    content: string;
    date_posted: string;
    author: string;
}

type Product = {
    product_name: string;
    brand: string;
    color: string;
    size: string;
    price: string;
    quantity: string;
}

type User = {
    name: string;
    email: string;
    uid: string;
}

type UserFromFirebase = {
    email: string;
    first_name: string;
    sales: {
        price_per_unit: number;
        product: string;
        quantity: number;
        total_price: number;
    }
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

type DetailBlog = {
    author: string;  
    content: string;
    title: string;
    date_posted: string;
}

type SelectStore = {
    time: string;
    handleSetTime: (time) => void;
}

type GraphData = {
    name: string;
    price: string;
}