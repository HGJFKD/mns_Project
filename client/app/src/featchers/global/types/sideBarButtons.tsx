
type SideBarButtons = {
    to: string,
    icon: React.ReactElement,
    title: string,
    subBtn?: string[],
    span?: string
    handleClick?: () => void
}

export type SideBarProps = {
    open: boolean | undefined,
    setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    handleClick: () => void
};

export default SideBarButtons