"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type DropdownMenuProps = {
    title: string;
    Variable: string;
    setVariable: React.Dispatch<React.SetStateAction<string>>;
    variableArray: string[];
}

const PaperFilterDropdown: React.FC<DropdownMenuProps> = ({title, Variable, setVariable, variableArray}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{Variable || "None"}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={Variable} onValueChange={setVariable}>
          {variableArray.map((item, index) => (
            <DropdownMenuRadioItem key={index} value={item}>
                {item}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default PaperFilterDropdown