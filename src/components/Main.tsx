import FiltersDropDown from "./FiltersDropDown"
import SortDropDown from "./SortDropDown"

import employeesData from "../db/employees"
import { useEffect, useState } from "react"

let pageNum: number = 1

export type SortPropertyType = 'none' | 'name' | 'surname' | 'country' | 'email' | 'projectName' | 'taskProgress' | 'status' | 'date'

const Main = () => {

  let [sortProperty, setSortProperty] = useState<SortPropertyType>('none')
  let [modifiedEmployeesData, setModifiedEmployeesData] = useState([...employeesData])

  let [filterString, setFilterString] = useState<string>('')

  let [startIndex, setStartIndex] = useState<number>(0)
  let numRowsDisplayed = 7
  let numPages = Math.ceil(employeesData.length / numRowsDisplayed)

  const handlePreviousClick = () => {
    pageNum = pageNum == 1 ? 1 : pageNum - 1
    setStartIndex((startIndex - numRowsDisplayed) < 0 ? 0 : startIndex - numRowsDisplayed)
  }
  const handleNextClick = () => {
    pageNum = pageNum == numPages ? numPages : pageNum + 1
    setStartIndex((startIndex + numRowsDisplayed) > employeesData.length ? employeesData.length : startIndex + numRowsDisplayed)
  }


  useEffect(() => {
    const allTds = document.querySelectorAll('td')
    allTds.forEach(task => {
      if (task.textContent?.includes('completed')) {
        task.style.borderRight = '2px solid limegreen'
      }
    })

    allTds.forEach(task => {
      if (task.textContent?.includes('progress')) {
        task.style.borderRight = '2px solid yellow'
      }
    })

    allTds.forEach(task => {
      if (task.textContent?.includes('not started')) {
        task.style.borderRight = '2px solid red'

      }
    })

    allTds.forEach(task => {
      if (task.textContent?.includes('in review')) {
        task.style.borderRight = '2px solid aqua'

      }
    })
  })

  // Filter based on filter string
  useEffect(() => {

    // Style all completed tasks


    if (filterString == '') { setModifiedEmployeesData([...employeesData]); return }
    setModifiedEmployeesData(employeesData.filter(employee => {

      const day = employee.date.getDate().toString().padStart(2, '0'); // Ensure 2 digits
      const month = (employee.date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
      const year = employee.date.getFullYear().toString();

      return employee.name.toLowerCase().includes(filterString.toLowerCase()) ||
        employee.surname.toLowerCase().includes(filterString.toLowerCase()) ||
        employee.country.toLowerCase().includes(filterString.toLowerCase()) ||
        employee.email.toLowerCase().includes(filterString.toLowerCase()) ||
        employee.projectName.toLowerCase().includes(filterString.toLowerCase()) ||
        employee.status.toLowerCase().includes(filterString.toLowerCase()) ||
        employee.taskProgress.toString().includes(filterString) ||
        `${day}/${month}/${year}`.includes(filterString)
    }))
  }, [filterString])

  // Sort the data based on the sortProperty
  useEffect(() => {

    switch (sortProperty) {
      case 'name':
        employeesData.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'surname':
        employeesData.sort((a, b) => a.surname.localeCompare(b.surname))
        break
      case 'country':
        employeesData.sort((a, b) => a.country.localeCompare(b.country))
        break
      case 'email':
        employeesData.sort((a, b) => a.email.localeCompare(b.email))
        break
      case 'projectName':
        employeesData.sort((a, b) => a.projectName.localeCompare(b.projectName))
        break
      case 'taskProgress':
        employeesData.sort((a, b) => a.taskProgress - b.taskProgress)
        break
      case 'status':
        employeesData.sort((a, b) => a.status.localeCompare(b.status))
        break
      case 'date':
        employeesData.sort((a, b) => a.date.getTime() - b.date.getTime())
        break
      default:
        break;
    }
    setModifiedEmployeesData([...employeesData])

  }, [sortProperty])

  return (
    <>
      <header className="flex gap-4">
        <SortDropDown setSortProperty={setSortProperty} />
        <FiltersDropDown setFilterString={setFilterString} />


      </header>


      <main className="overflow-scroll border-[1px] ">
        <table className="w-full border-[1px] border-[#656464]">
          <thead>
            <tr className="border-y-[1px] border-[#656464] p-4 text-left">
              <th className="p-2">Image</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Country</th>
              <th>Email</th>
              <th>Project Name</th>
              <th>Task Progress</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {modifiedEmployeesData.map((employee, index) => {

              if (!(index >= startIndex && index < (pageNum * numRowsDisplayed))) return null

              // Components for the date
              const day = employee.date.getDate().toString().padStart(2, '0'); // Ensure 2 digits
              const month = (employee.date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
              const year = employee.date.getFullYear().toString();

              // Components for the progress bar
              const progress = employee.taskProgress
              const progressColor = progress < 50 ? 'bg-red-500' : progress < 75 ? 'bg-yellow-500' : 'bg-green-500'
              const progressWidth = progress + '%'


              return <tr key={employee.email} className="border-y-[2px] border-dotted border-[#656464]">
                <td className="border-r-[1px] border-dotted border-[#656464]"> <img className="object-cover rounded-full w-[50px] p-2" src={employee.image} alt="" /></td>
                <td className="border-r-[1px] border-dotted border-[#656464]">{employee.name}</td>
                <td className="border-r-[1px] border-dotted border-[#656464]">{employee.surname}</td>
                <td className="border-r-[1px] border-dotted border-[#656464]">{employee.country}</td>
                <td className="border-r-[1px] border-dotted border-[#656464]">{employee.email}</td>
                <td className="border-r-[1px] border-dotted border-[#656464]">{employee.projectName}</td>
                <td className="border-r-[1px] border-dotted border-[#656464] px-2">
                  <div className=" bg-gray-300 h-2 w-32 rounded-full">
                    <div className={`${progressColor} h-full rounded-full`} style={{ width: progressWidth }}></div>
                  </div>
                </td>
                <td className="border-r-[1px] border-dotted border-[#656464]">{employee.status}</td>
                <td className="pr-2">{`${day}/${month}/${year}`}</td>
              </tr>
            })}
          </tbody>
        </table>
      </main >

      <footer className="flex justify-end gap-4 items-center right-0 sticky">
        <button onClick={handlePreviousClick} disabled={pageNum == 1}
          className="px-4 py-2 rounded-md bg-[#343746] hover:scale-[1.05] hover:cursor-pointer active:scale-[0.95]">Previous</button>
        <p> Page {pageNum} of {numPages}</p>
        <button onClick={handleNextClick} disabled={pageNum == numPages}
          className="px-4 py-2 rounded-md bg-[#343746] hover:scale-[1.05] hover:cursor-pointer active:scale-[0.95]">Next</button>
      </footer>
    </>
  )
}

export default Main