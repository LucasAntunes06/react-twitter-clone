export default function Trend() {
    return (
        <div className="hover:bg-trends-hover w-full px-4
                cursor-pointer">
            <i className="bi bi-three-dots text-xl text-text-search
                     font-light mr-2 align-top right-10 absolute
                     hover:bg-twitter-blue-2 rounded-full"></i>
            <div className="flex flex-col">
                <p className="text-text-search text-sm">Assunto do Momento em Brasil</p>
                <h4 className="font-bold">Lorem Ipsum</h4>
                <p className="text-text-search text-sm">1.666 Tweets</p>
            </div>
            <i className="bi bi-three-dots text-xl text-text-search
                     font-light mr-2 align-top right-10 absolute
                     hover:bg-twitter-blue-2 rounded-full"></i>
        </div>
    )
}