interface NavItemProps {
    itemTitle: string;
}
import Button from "./ui/Button.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const NavItem = ({itemTitle}: NavItemProps) => {
    const {changePage} = useContext(SWContext);

    return (
        <Button callback={() => changePage(itemTitle)}>{itemTitle}</Button>
    )
}

export default NavItem;