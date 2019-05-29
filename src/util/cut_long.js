export default function cut_long(item,l){
    if(item.length>l){
        let res=item.slice(0,l)
        return res+'...'
    }else{
        return item
    }
}