import { useState } from "react";
import { BiSort } from "react-icons/bi"
import { FaChevronDown } from "react-icons/fa"

import { SortPropertyType } from "./Main";

const SortDropDown = ({ setSortProperty }: { setSortProperty: (property: SortPropertyType) => void }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setIsOpen(!isOpen);

    e.currentTarget.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
  };

  const handleSortType = (property: SortPropertyType) => {
    setSortProperty(property)
    setIsOpen(!isOpen);

    const down = document.getElementById('FaChevronDown')
    down!.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
  }

  return (
    <div id="sortDropDown" className="flex relative gap-2 p-2 border-[1px] border-white rounded-md text-white w-fit items-center">
      <BiSort size={20} />
      <p>Sort</p>
      <FaChevronDown id="FaChevronDown"
        onClick={(e) => toggleDropDown(e)}
        className="FaChevronDown transition-all duration-300 hover:scale-[1.2] hover:cursor-pointer"
        size={20}
      />

      <div
        className={`absolute flex origin-top left-0 top-[60px] flex-col gap-4 bg-[#223145] p-4 rounded-md border-[1px] border-white transition-all duration-700 
        ${isOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-y-0 invisible"
          }`}
      >
        <p onClick={() => handleSortType('name')} className="py-2 px-8 border-[1px] border-white rounded-lg hover:cursor-pointer hover:scale-105 active:scale-95">Name</p>
        <p onClick={() => handleSortType('email')} className="py-2 px-8 border-[1px] border-white rounded-lg hover:cursor-pointer hover:scale-105 active:scale-95">Email</p>
        <p onClick={() => handleSortType('projectName')} className="py-2 px-8 border-[1px] border-white rounded-lg hover:cursor-pointer hover:scale-105 active:scale-95">Project Name</p>

        <p onClick={() => handleSortType('taskProgress')} className="py-2 px-8 border-[1px] border-white rounded-lg hover:cursor-pointer hover:scale-105 active:scale-95">Task Progress</p>
        <p onClick={() => handleSortType('status')} className="py-2 px-8 border-[1px] border-white rounded-lg hover:cursor-pointer hover:scale-105 active:scale-95">Status</p>
        <p onClick={() => handleSortType('date')} className="py-2 px-8 border-[1px] border-white rounded-lg hover:cursor-pointer hover:scale-105 active:scale-95">Date</p>





      </div>
    </div >
  )
}

export default SortDropDown