export const fetchNFTs = async (url: string, options: Record<string,unknown>)=>{
    let data = []
    let error='';
    try{
        const response = await fetch(url, {
            headers: {Accept: 'application/json', 'X-API-KEY': 'null'},
            ...options,

        })
        data = await response.json()
        
    } catch(e){
        error = e.toString();
    }

    return {
        props:{
            data,
            error,
        },
    }
}