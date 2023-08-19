import gif from "../assets/loading.gif";


const Loading = () => {
    return ( 
        <div className="w-full h-[100vh] grid place-items-center">
            <img className="max-w-[300px]" src={gif} />
        </div>
     );
}
 
export default Loading;