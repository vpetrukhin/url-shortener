import {HTMLAttributes} from "react";
import {IURL} from "../../store/types/IURL";

export interface URLItemProps extends HTMLAttributes<HTMLLIElement> {
    item: IURL;
}