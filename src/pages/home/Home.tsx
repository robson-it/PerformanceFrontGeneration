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
                    <div className="flex justify-center ">
                        
                    </div>
                </div>
            </div>
            <img
                            src="https://saude.abril.com.br/wp-content/uploads/2023/05/medicamentos.jpg?quality=85&strip=info&w=720&h=440&crop=1"
                            alt="Imagem Página Home"
                            className='w-3/6'
                        />

        </>
    )
}

export default Home