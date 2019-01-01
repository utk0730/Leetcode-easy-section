var numUniqueEmails = function(emails) {
    let res=[]
    for(let i=0;i<emails.length;i++){
        let idx = emails[i].indexOf('@')
        let localName = emails[i].slice(0,idx).replace(/[.]/g, '');
        if(localName.includes('+')){
            localName = localName.slice(0,localName.indexOf('+'))
        }
        let domainName =  emails[i].slice(idx)
        let email = localName.concat(domainName)
         if(!res.includes(email)){
             res.push(email)
        }
    }
    return res.length    
};
