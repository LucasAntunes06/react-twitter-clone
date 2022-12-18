export default function SideBar() {
    return (
        <div className="side-bar-container w-72 bg-black border-r-2 h-screen
        flex flex-col items-center">

            <div className="flex flex-col items-center">
                <ul className="text-white">
                    <li className="mb-6 w-12 flex items-center justify-center h-12 cursor-pointer hover:bg-stone-900 hover: rounded-full h-10 p-1">
                        <i className="bi bi-twitter text-3xl"></i>
                    </li>

                    <li className="cursor-pointer hover:bg-stone-900 hover: rounded-full h-10 p-4
                    flex flex-row items-center">
                        <i className="bi bi-house-door-fill text-2xl mr-2"></i>
                        <a>Página Inicial</a>
                    </li>

                    <li className="cursor-pointer hover:bg-stone-900 hover: rounded-full h-10 p-4
                    flex flex-row items-center">
                        <i className="bi bi-hash text-2xl mr-2"></i>
                        <a>Explorar</a>
                    </li>

                    <li className="cursor-pointer hover:bg-stone-900 hover: rounded-full h-10 p-4
                    flex flex-row items-center">
                        <i className="bi bi-bell text-2xl mr-2"></i>
                        <a>Notificações</a>
                    </li>

                    <li className="cursor-pointer hover:bg-stone-900 hover: rounded-full h-10 p-4
                    flex flex-row items-center">
                        <i className="bi bi-envelope text-2xl mr-2"></i>
                        <a>Mensagens</a>
                    </li>

                    <li className="cursor-pointer hover:bg-stone-900 hover: rounded-full h-10 p-4
                    flex flex-row items-center">
                        <i className="bi bi-bookmark text-2xl mr-2"></i>
                        <a>Itens Salvos</a>
                    </li>

                    <li className="cursor-pointer hover:bg-stone-900 hover: rounded-full h-10 p-4
                    flex flex-row items-center">
                        <i className="bi bi-list-check text-2xl mr-2"></i>
                        <a>Listas</a>
                    </li>

                    <li className="cursor-pointer hover:bg-stone-900 hover: rounded-full h-10 p-4
                    flex flex-row items-center">
                        <i className="bi bi-person text-2xl mr-2"></i>
                        <a>Perfil</a>
                    </li>

                    <li className="cursor-pointer hover:bg-stone-900 hover: rounded-full h-10 p-4
                    flex flex-row items-center">
                        <i className="bi bi-three-dots text-2xl mr-2"></i>
                        <a>Mais</a>
                    </li>
                </ul>

                <div className="bg-sky-500 p-2 rounded-full my-4 w-40 text-center
            cursor-pointer">
                    Tweetar
                </div>

                <div className="flex flex-row gap-2 items-center hover:bg-neutral-900 
                hover:rounded-full p-2 cursor-pointer">
                    <div id="profile" className="h-8 w-8 rounded-full"></div>
                    <div>
                        <div className="flex fle-col">
                            <p>User0123</p>
                            <i className="bi bi-lock-fill"></i>
                        </div>
                        <p className="text-neutral-500 text-sm">@user0123</p>
                    </div>
                        <i className="bi bi-three-dots text-lg"></i>
                </div>
            </div>

        </div>
    )
}
