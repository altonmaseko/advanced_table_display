import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdSort } from "react-icons/md";

const FiltersDropDown = ({ setFilterString }: { setFilterString: (filter: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setIsOpen(!isOpen);

    e.currentTarget.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
  };

  return (
    <div className="relative flex gap-2 p-2 border-[1px] border-white rounded-md text-white w-fit items-center">
      <MdSort size={20} />
      <p>Filters</p>
      <FaChevronDown
        onClick={(e) => toggleDropDown(e)}
        className="transition-all duration-300 hover:scale-[1.2] hover:cursor-pointer"
        size={20}
      />

      <div
        id="filtersDropDown"
        className={`absolute  origin-top left-0 top-[60px] flex-col gap-4 bg-[#223145] p-4 rounded-md border-[1px] border-white transition-all duration-700 
        ${isOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-y-0 invisible"
          }`}
      >
        <div className="flex flex-col gap-2">
          <p>Filter By Anything</p>
          <input onChange={(e) => setFilterString(e.currentTarget.value)} className="p-2 rounded-md text-black" type="text" />
        </div>
      </div>
    </div>
  );
};

export default FiltersDropDown;
