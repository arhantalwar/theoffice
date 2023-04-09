const Imgholder = (props) => {
    return (

        <div className="group h-fit w-52 rounded-xl bg-[#1F1F1F] m-2
        flex-col relative justify-between transition ease-in hover:bg-[#333333] pb-4">

        <div className="p-4">
            <img src={props.url} width="100%" className="rounded-xl" />
        </div>

        <div className="w-full pl-5">
            <h1 className="font-bold text-2xl text-white">{props.friendsName}</h1>
            <p className="text-gray-400 text-sm mt-2">{props.infoAboutThem}</p>
        </div>

        </div>

    )
}

export default Imgholder;
