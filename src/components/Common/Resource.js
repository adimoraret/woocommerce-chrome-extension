export function createPropertyObject(fieldName, displayName, link, title, order){
    return {
        fieldName: fieldName, 
        displayName: displayName,
        link: link,
        title: title,
        order: order
    };
}