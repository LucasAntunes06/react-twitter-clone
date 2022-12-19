export default function TrendsBar() {
    return (
        <div className="flex flex-col items-center right-0 absolute h-screen top-0 pr-0
        w-4/12 bg-black border border-border text-white">
            <div className="bg-search flex flex-row gap-2 items-center
                rounded-full px-2 py-3 w-96 mt-1 mb-3 text-zinc-500 active:bg-black 
                cursor:text active:border-1 active:border-zinc-500 text-active">
                <i className="bi bi-search ml-4"></i>
                <p>Buscar no Twitter</p>
            </div>

            <div className="h-96 w-96 rounded-xl bg-trends
            flex flex-col items-start">
                <h1 className="text-xl text-extrabold font-unbounded px-4 py-3">O que está acontecendo</h1>

                <div className="hover:bg-trends-hover w-full px-4
                cursor-pointer">
                    <i className="bi bi-three-dots text-xl text-text-search
                     font-light mr-2 align-top right-10 absolute
                     hover:bg-twitter-blue-2 rounded-full"></i>
                    <div className="flex flex-col">
                        <p className="text-text-search text-sm ">Assunto do Momento em Brasil</p>
                        <h4>Lorem Ipsum</h4>
                        <p className="text-text-search text-sm">1.666 Tweets</p>
                    </div>
                    <i className="bi bi-three-dots text-xl text-text-search
                     font-light mr-2 align-top right-10 absolute
                     hover:bg-twitter-blue-2 rounded-full"></i>
                </div>

                <div className="hover:bg-trends-hover w-full px-4
                cursor-pointer">
                    <div className="flex flex-col">
                        <p className="text-text-search text-sm ">Assunto do Momento em Brasil</p>
                        <h4>Lorem Ipsum</h4>
                        <p className="text-text-search text-sm">1.666 Tweets</p>
                    </div>
                    <i className="bi bi-three-dots text-xl text-text-search
                     font-light mr-2 align-top right-10 absolute
                     hover:bg-twitter-blue-2 rounded-full"></i>
                </div>

                <div className="hover:bg-trends-hover w-full px-4
                cursor-pointer">
                    <div className="flex flex-col">
                        <p className="text-text-search text-sm ">Assunto do Momento em Brasil</p>
                        <h4>Lorem Ipsum</h4>
                        <p className="text-text-search text-sm">1.666 Tweets</p>
                    </div>
                    <i className="bi bi-three-dots text-xl text-text-search
                     font-light mr-2 align-top right-10 absolute
                     hover:bg-twitter-blue-2 rounded-full"></i>
                </div>

                <div className="hover:bg-trends-hover w-full px-4
                cursor-pointer">
                    <div className="flex flex-col">
                        <p className="text-text-search text-sm ">Assunto do Momento em Brasil</p>
                        <h4>Lorem Ipsum</h4>
                        <p className="text-text-search text-sm">1.666 Tweets</p>
                    </div>
                    <i className="bi bi-three-dots text-xl text-text-search
                     font-light mr-2 align-top right-10 absolute
                     hover:bg-twitter-blue-2 rounded-full"></i>
                </div>

                <div className="hover:bg-trends-hover w-full px-4
                cursor-pointer flex flex-row">
                    <div className="flex flex-col">
                        <p className="text-text-search text-sm ">Assunto do Momento em Brasil</p>
                        <h4>Lorem Ipsum</h4>
                        <p className="text-text-search text-sm">1.666 Tweets</p>
                    </div>
                    <i className="bi bi-three-dots text-xl text-text-search
                     font-light mr-2 align-top right-10 absolute
                     hover:bg-twitter-blue-2 rounded-full"></i>
                </div>

                <div className="py-3  bg-trends hover:bg-trends-hover w-full rounded-b-xl">
                    <h3 className="mx-4 text-twitter-blue cursor-pointer">Mostrar mais</h3>
                </div>
            </div>

            {/* <div className="h-56 w-96 rounded-xl bg-trends
            flex flex-col items-start mt-4">
                Quem seguir

            </div> */}
        </div>
    )
}