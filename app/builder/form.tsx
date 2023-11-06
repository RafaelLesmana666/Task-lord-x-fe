import React from 'react';


interface Template {
    label: string,
    id?: string,
    type: string,
    name: string,
    placeholder?: string,
    style?: string,
    option?: string[],

}

const Form = ({ columns } : {columns: Template[]}) => {
    {console.log(columns)}
    const array = ['1','2','3'];
    return (
        <>
        <form method="post">
            {columns.map((column: any,index: number) => (
                <div key={index} className='flex flex-col gap-4 mb-5'>
                    <label className='text-gray-600 text-xl font-medium required'>
                            {column.label}
                    </label>
                    { column.type == 'number' ? (
                        <input 
                            id={column.id} 
                            type={column.type} 
                            name={column.name} 
                            className='border border-solid border-gray-200 text-gray-800 rounded-md py-2 px-3 outline-blue-500' 
                            style={column.style}>    
                        </input>
                    ) : column.type == 'select' ? (
                        <select id={column.id} name={column.name} style={column.style} className="pointer rounded-md border-2 border-solid border-gray-200 py-2 px-3 focus:border-blue-500 outline-none text-gray-800">
                            {column.option.map((element:string,key: any) => ( 
                                <option className="hover:bg-blue-500 option rounded rounded-tl" value={key}>{element}</option> 
                            ))}
                        </select>
                    ) : column.type == 'radio' || column.type == 'checkbox' ? (
                        <div className="gap-4 flex">
                            {column.option.map((element: any,key: any) => (
                                <label className="pr-2">
                                    <input 
                                        id={column.id}
                                        className="mr-2"
                                        type={column.type}
                                        style={column.style}
                                        value={key}/>
                                        {element}
                                </label>
                            ))}
                        </div>
                    ) : (
                        <input 
                            id={column.id} 
                            type="text" 
                            name={column.name} 
                            className='border border-solid border-gray-200 text-gray-800 rounded-md py-2 px-3 outline-blue-500' 
                            style={column.style}>    
                        </input>
                    )}
                </div>
            ))}
        </form>
       </>
    )
}

export default Form;