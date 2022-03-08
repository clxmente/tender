import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Liked from "../components/Liked"

export default function viewlikes() {
    return (
        <div className="mx-6 my-6">
        <Liked label = "Restaurant #1 Name" description="Restaurant #1 Description" button = "Restaurant"/>
        <Liked label = "Recipe #1 Name" description="Recipe #1 Description" button = "Recipe"/>
        <Liked label = "Recipe #2 Name" description="Recipe #2 Description" button = "Recipe"/>
        <Liked label = "Recipe #3 Name" description="Recipe #3 Description" button = "Recipe"/>
        <Liked label = "Recipe #4 Name" description="Recipe #4 Description" button = "Recipe"/>
        <Liked label = "Restaurant #2 Name" description="Restaurant #2 Description" button = "Restaurant"/>
        <Liked label = "Recipe #5 Name" description="Recipe #5 Description" button = "Recipe"/>
        <Liked label = "Recipe #6 Name" description="Recipe #6 Description" button = "Recipe"/>
        <Liked label = "Recipe #7 Name" description="Recipe #7 Description" button = "Recipe"/>
        <Liked label = "Restaurant #3 Name" description="Restaurant #3 Description" button = "Restaurant"/>
        </div>
        
    );
}