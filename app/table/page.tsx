import SideBar from "../layouts/Sidebar";

const base_url = 'https://jsonplaceholder.typicode.com/posts'

async function Table(){
    const res = await fetch(base_url)
    const response = await res.json()

    return (
        <table className="table-auto border-collapse border-gray-200">
                <caption className="caption-bottom text-gray-500">
                All right reserved by L &copy;
                </caption>
                <thead className="bg-blue-500 text-white text-center h-12 font-semibold text-lg subpixel-antialiased tracking-wide">
                    <tr>
                        <td className="rounded-tl-3xl">id</td>
                        <td>Title</td>
                        <td className="rounded-tr-3xl">body</td>
                    </tr>
                </thead>
                <tbody className="border border-gray-200">
                    {response.map((value: any) => (
                        <tr className="border border-gray-200 odd:bg-gray-200">
                            <td className="border border-gray-200 text-center p-2">{value.id}</td>
                            <td className="border border-gray-200 text-ellipsis overflow-hidden p-2">{value.title}</td>
                            <td className="border border-gray-200 text-ellipsis overflow-hidden p-2">{value.body}</td>
                        </tr>
                    ))}
                </tbody>
        </table>
    )
}

export default Table;