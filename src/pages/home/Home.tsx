import ListaCategorias from "../../Components/Categorias/ListaCategorias/ListaCategorias"

function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                       
                    </div>

                    <div className="flex justify-center ">
                        
                    </div>
                </div>
            </div>
            <ListaCategorias/>
            
        </>
    )
}

export default Home