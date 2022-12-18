export default function TrendsBar() {
    return (
        <div className="flex flex-col items-center right-0 absolute h-screen top-0 pr-0
        w-4/12 bg-black border-l border-gray">
            <div className="bg-gray-100 flex flex-row gap-2 items-center
                rounded-full px-2 py-3 w-96 mt-1 mb-3 text-zinc-500 active:bg-black 
                cursor:text active:border-1 active:border-zinc-500 text-active">
                <i className="bi bi-search ml-4"></i>
                <p>Buscar no Twitter</p>
            </div>

            <div className="h-96 w-96 rounded-xl bg-gray-200
            flex flex-col items-start">
                <h1 className="text-xl text-bold px-4">O que está acontecendo</h1>
                
                <div className="hover:bg-slate-900 w-full px-4
                cursor-pointer">
                    <p className="text-neutral-400 text-sm ">Assunto do Momento em Brasil</p>
                    <h4>Lorem Ipsum</h4>
                    <p className="text-neutral-400 text-sm">1.666 Tweets</p>
                </div>

                <div className="hover:bg-slate-900 w-full px-4
                cursor-pointer">
                    <p className="text-neutral-400 text-sm ">Assunto do Momento em Brasil</p>
                    <h4>Lorem Ipsum</h4>
                    <p className="text-neutral-400 text-sm">1.666 Tweets</p>
                </div>

                <div className="hover:bg-slate-900 w-full px-4
                cursor-pointer">
                    <p className="text-neutral-400 text-sm ">Assunto do Momento em Brasil</p>
                    <h4>Lorem Ipsum</h4>
                    <p className="text-neutral-400 text-sm">1.666 Tweets</p>
                </div>

                <div className="hover:bg-slate-900 w-full px-4
                cursor-pointer">
                    <p className="text-neutral-400 text-sm ">Assunto do Momento em Brasil</p>
                    <h4>Lorem Ipsum</h4>
                    <p className="text-neutral-400 text-sm">1.666 Tweets</p>
                </div>

                <div className="hover:bg-slate-900 w-full px-4
                cursor-pointer">
                    <p className="text-neutral-400 text-sm ">Assunto do Momento em Brasil</p>
                    <h4>Lorem Ipsum</h4>
                    <p className="text-neutral-400 text-sm">1.666 Tweets</p>
                </div>

                <h3 className="mx-4 text-sky-500 cursor-pointer">Mostrar mais</h3>
            </div>

            <div className="h-56 w-96 rounded-xl bg-gray-200
            flex flex-col items-start mt-4">
                Quem seguir
                
            </div>
        </div>
    )
}