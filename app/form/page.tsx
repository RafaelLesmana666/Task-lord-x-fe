import Form from '../builder/form';
import SideBar from '../layouts/Sidebar';

export default function Page() {

    const columns = [
        {
            label: "ppppp",
            id: "xnxx",
            type: "xnxx",
            name: "xnxx",
            option: ['1','2','xxx']
        },
        {
            label: "xnxx",
            id: "xnxx",
            type: "select",
            name: "xnxx",
            option: ['1','2','3']
        },
        {
            label: "pornhub",
            id: "xnxx",
            type: "checkbox",
            name: "xnxx",
            option: ['aku suka membaca buku','suka bermain video game','suka berpetualangan']
        },
    ];

    return (
        <>
            <h1>page form</h1>
            <div className='mx-12 my-4'>
                <Form columns={columns}/>
            </div>
        </>
    )
}